import { Controller, Get, Param, Post, Body, Delete, Query, UseGuards, Put, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { TagService } from './tag.service';
import { RequestCreateTagDto, RequestUpdateTagDto, RequestTagDto } from './tag.dto';
import { ResponseSimpleProductDto } from 'src/features/productControl/product.dto';
import { QueryOptionsPipe } from 'src/common/pipes/queryOptions.pipe';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { Where } from 'src/common/decorators/query/where.decorator';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

//@UseGuards(PermissionsGuard())
@Controller('tag')
export class TagController {

    constructor(private tagService: TagService) { }

    @UseInterceptors(QueryOptionsInterceptor)
    @Paginate(100)
    @Where({
        name: ['like'], // Atributo que se va a filtrar junto con su operador
    })
    @Get()
    async all(
        @Query(new ValidationPipe({ transform: true })) qs: RequestTagDto,
        @QueryOptions() options: ServiceOptions) {
        return await this.tagService.all(qs, options);
    }

    @Get(':id')
    async one(@Param('id') id: number) {
        return await this.tagService.byId(id);
    }

    @Get(':id/products')
    async getProductsForTag(@Param('id') id: number): Promise<ResponseSimpleProductDto[]> {
        return await this.tagService.getProductsForTag(id) as any;
    }

    @Post('relation-product/:code')
    async createWithProduct(@Param('code') codProduct: string, @Body(new ValidationPipe({ whitelist: true, transform: true })) tag: RequestCreateTagDto) {
        return await this.tagService.createForProduct(tag, codProduct);
    }

    @Post()
    async create(@Body(new ValidationPipe({ whitelist: true, transform: true })) tag: RequestCreateTagDto) {
        return await this.tagService.create(tag);
    }


    @Put(':id')
    async update(@Param('id') id: number, @Body() tag: RequestUpdateTagDto) {
        return await this.tagService.update(id, tag);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.tagService.delete(id);
        return 'ok';
    }

    @Delete(':tagId/product/:productId')
    async deleteTagProduct(@Param('tagId') tagId: number, @Param('productId') productId: number) {
        await this.tagService.deleteTagProduct(tagId, productId);
        return 'ok';
    }

}

