import { Controller, Get, Param, Body, Put, Query, UseInterceptors, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { QueryProductDto, ResponseSimpleProductDto, ResponseProductDto, RequestUpdateProductDto, ResponseProvidersByProductDto, } from './product.dto';
import { ResponseTagDto } from '../params/tag/tag.dto';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Where } from 'src/common/decorators/query/where.decorator';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { CurrencyInterceptor } from 'src/common/interceptors/currency.interceptor';
import { ReqCurrency } from 'src/common/decorators/currency.decorator';
import { Currency } from 'src/database/models/VAD10/currency/currency.entity';
import { Include } from 'src/common/decorators/query/include.decorator';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';


@UseGuards(PermissionsGuard())
@Controller('product')
export class ProductControlController {

    constructor(private productService: ProductService) { }


    @UseInterceptors(QueryOptionsInterceptor, CurrencyInterceptor)
    @Get('simple')
    @Paginate(100)
    @Where({
        tagId: ['eq'],
        c_Codigo: ['like'],
        c_Descri: ['like']
    })
    // @Include(Tag)
    async allSimple(@QueryOptions() options: ServiceOptions, @ReqCurrency() currency: Currency): Promise<ResponseSimpleProductDto> {
        return await this.productService.allSimple(options, currency) as any;
    }

    @Get(':code')
    async getProductByCod(@Param('code') codigo: string): Promise<ResponseProductDto[]> {
        return await this.productService.getByProductCod(codigo) as any;
    }

    @Get(':code/providers')
    async getProvidersByProductCod(@Param('code') codigo: string): Promise<ResponseProvidersByProductDto[]> {
        return await this.productService.getProvidersByProductCod(codigo);
    }

    @Get(':code/tags')
    async getTagsByProductCod(@Param('code') codigo: string): Promise<ResponseTagDto[]> {
        return await this.productService.getTagsByProductCod(codigo);
    }

    @Get(':code/group-by/departament')
    async getProductsForDepartament(@Param('code') code: string): Promise<ResponseProductDto[]> {
        return await this.productService.getProductsForDepartament(code) as any;
    }

    @Get(':code/group-by/departament/group')
    async getProductsForGroup(@Param('code') code: string): Promise<ResponseProductDto[]> {
        return await this.productService.getProductsForGroup(code) as any;
    }

    @Get(':code/group-by/departament/group/sub-group')
    async getProductsForSubGroup(@Param('code') code: string): Promise<ResponseProductDto[]> {
        return await this.productService.getProductsForSubGrupo(code) as any;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() product: RequestUpdateProductDto) {
        await this.productService.update(id, product);
        console.log(product);
    }


}

