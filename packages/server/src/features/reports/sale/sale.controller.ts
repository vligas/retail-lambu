import { Controller, Get, Query, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { QueryOptionsPipe } from 'src/common/pipes/queryOptions.pipe';
import { RequestSaleDto } from './sale.dto';
import { Where } from 'src/common/decorators/query/where.decorator';
import { SaleService } from './sale.service';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';






@Controller('sale')
export class SaleController {
    constructor(
        private salesService: SaleService
    ) { }

    @UseInterceptors(QueryOptionsInterceptor)
    @Where({
        c_Codigo: ['like'],
        c_CODARTICULO: ['eq'],
        c_CONCEPTO: ['eq'],
        f_fecha: ['lt', 'gt']
    })
    @Paginate(100)
    @Get()
    async all(
        @QueryOptions() options: ServiceOptions
    ) {
        return this.salesService.getProductsWithSales(options);
    }
}
