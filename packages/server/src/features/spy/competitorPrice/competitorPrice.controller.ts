import { Controller, Get, UseInterceptors, Param, Post, Body, ValidationPipe, UploadedFiles, UseGuards } from '@nestjs/common';
import { CompetitorPriceService } from './competitorPrice.service';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { Where } from 'src/common/decorators/query/where.decorator';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { RequestCreateCompetitorPriceDto } from './competitorPrice.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { config } from 'src/config/config.service';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';


@Controller('competitor-price')
export class CompetitorPriceController {

    constructor(
        private competitorPriceService: CompetitorPriceService
    ) { }


    @UseInterceptors(QueryOptionsInterceptor)
    @Where({})
    @Paginate(100)
    @Get()
    async all(
        @QueryOptions() options: ServiceOptions
    ) {
        return this.competitorPriceService.all(options);
    }

    @Get(':id')
    async one(@Param('id') id: number) {
        // return await this.competitorService.byId(id);
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([{ name: 'photo', maxCount: 1 }], { dest: `${config.get('UPLOAD_PATH')}/competition-prices` }))
    async create(
        @Body(new ValidationPipe({ transform: true, whitelist: true })) competitor: RequestCreateCompetitorPriceDto,
        @UploadedFiles() files: any
    ) {
        console.log(files);

        return await this.competitorPriceService.create({ ...competitor, image: files.photo[0].path });
    }
}
