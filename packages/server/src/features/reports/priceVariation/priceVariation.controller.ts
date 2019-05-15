import { PriceVariationService } from './priceVariation.service';
import { Controller, Get, Query, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { RequestPriceVariationDto } from './priceVariation.dto';
import { QueryOptionsPipe } from 'src/common/pipes/queryOptions.pipe';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { Where } from 'src/common/decorators/query/where.decorator';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';

@Controller('price-variation')
export class PriceVariationController {
    constructor(
        private variationService: PriceVariationService
    ) {

    }

    @UseInterceptors(QueryOptionsInterceptor)
    @Paginate(100)
    @Where({
        tagId: ['eq']
    })
    @Get()
    async all(@QueryOptions() options: ServiceOptions) {
        return this.variationService.getProducts(options);
    }
}
