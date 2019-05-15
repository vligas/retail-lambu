import { GapService } from './gap.service';
import { Controller, Get, Query, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { RequestGapDto, ResponseGapDto, Prices, RequestListGapersDto } from './gap.dto';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { Where } from 'src/common/decorators/query/where.decorator';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { isString } from 'util';
import { logger } from 'src/common/services/logger.service';

@Controller('gap')
export class GapController {
    constructor(
        private gapService: GapService
    ) {

    }


    @UseInterceptors(QueryOptionsInterceptor)
    @Where({
        gap: ['gt', 'lt'],
        c_Codigo: ['like']
    })
    @Paginate(100)
    @Get()
    async all(
        @Query(new ValidationPipe({ transform: true })) qs: RequestGapDto,
        @QueryOptions() options: ServiceOptions
    ) {
        console.log(options);
        return this.gapService.getProductsWithGapBetween(qs.differenceField1, qs.differenceField2, options);
    }

    /// LA CASA MORMONT DEJÓ DE EXISTIR...
    /// EL NORTE NUNCA OLVIDA, LADY LYANNA
    @UseInterceptors(QueryOptionsInterceptor)
    @Where({
        gap: ['gt', 'lt'],
        c_Codigo: ['like']
    })
    @Paginate(100)
    @Get('best')
    async best(
        @Query(new ValidationPipe({ transform: true })) qs: RequestListGapersDto,
        @QueryOptions() options: ServiceOptions
    ) {
        logger.info(qs)
        logger.info(options)
        
        let gapers= qs.gapers;
        if(isString(qs.gapers)){
            gapers= JSON.parse(qs.gapers);
        }
        
        return this.gapService.getProductWithBestGaper(gapers, options);
    }
}
