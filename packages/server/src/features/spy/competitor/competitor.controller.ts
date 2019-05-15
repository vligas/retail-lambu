import { Controller, Get, UseInterceptors, Param, Post, Body, ValidationPipe, Put, Delete, UseGuards } from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { Where } from 'src/common/decorators/query/where.decorator';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { RequestCreateCompetitorDto, RequestUpdateCompetitorDto } from './competitor.dto';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

@UseGuards(PermissionsGuard())
@Controller('competitor')
export class CompetitorController {

    constructor(
        private competitorService: CompetitorService
    ) { }


    @UseInterceptors(QueryOptionsInterceptor)
    @Where({})
    @Paginate(100)
    @Get()
    async all(
        @QueryOptions() options: ServiceOptions
    ) {
        return this.competitorService.all(options);
    }

    @Get(':id')
    async one(@Param('id') id: number) {
        return await this.competitorService.byId(id);
    }

    @Post()
    async create(@Body() competitor: RequestCreateCompetitorDto) {
        return await this.competitorService.create(competitor);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() register: RequestUpdateCompetitorDto) {
        return await this.competitorService.update(id, register);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.competitorService.delete(id);
        return 'ok';
    }
}
