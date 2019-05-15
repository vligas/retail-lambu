import { Controller, Get, Put, Param, Post, Body, Delete, UseGuards, Query, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { RequestCreateCurrencyDto, RequestAllCurrencyDto, RequestUpdateCurrencyDto, RequestCreateCurrencyHistoricDto } from './currency.dto';
import { QueryOptionsPipe } from 'src/common/pipes/queryOptions.pipe';
import { CurrencyHistory } from 'src/database/models/VAD10/currencyHistory/currencyHistory.entity';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { RequestContext } from 'src/common/interfaces/requestContext.class';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

@UseGuards(PermissionsGuard())
@Controller('currencies')
export class CurrencyController {

    constructor(private currencyService: CurrencyService) { }

    @UseInterceptors(QueryOptionsInterceptor)
    @Paginate(100)
    @Get()
    async all(
        @Query(new ValidationPipe({ transform: true })) qs: RequestAllCurrencyDto,
        @QueryOptions() options: ServiceOptions
    ) {
        return await this.currencyService.all(qs, options);
    }

    @Get(':id')
    async one(@Param('id') id: number) {
        return await this.currencyService.one(id);
    }

    @Post()
    async create(@Body(new ValidationPipe({
        whitelist: true,
        transform: true
    })) currency: RequestCreateCurrencyDto) {
        return await this.currencyService.create(currency);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.currencyService.delete(id);
        return 'ok';
    }


    @Put(':id')
    async update(@Param('id') id: number, @Body() currency: RequestUpdateCurrencyDto) {
        return await this.currencyService.update(id, currency);
    }

    @Get(':id/historic')
    async historic(@Param('id') id: number) {
        return await this.currencyService.getHistorical(id, { pageSize: 10, page: 1, query: {}, include: [], fields: [] });
    }

    @Post(':id/historic')
    async createHistoric(@Param('id') id: number, @Body(new ValidationPipe({
        whitelist: true,
        transform: true
    })) object: RequestCreateCurrencyHistoricDto) {

        const historic: Partial<CurrencyHistory> = { ...object, date: new Date(object.date) };
        historic.currencyId = id;
        return await this.currencyService.createHistoric(historic);
    }

    @Delete(':currencyId/historic/:historicId')
    async deleteHistoric(@Param('currencyId') currencyId: number, @Param('historicId') historicId: number) {
        return await this.currencyService.deleteHistoric(historicId);
    }

}
