import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { RequestCreateCategoryDto, RequestUpdateCategoryDto } from './category.dto';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';


@UseGuards(PermissionsGuard())
@Controller('categories')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Get()
    async all() {
        return await this.categoryService.all();
    }

    @Post()
    async create(@Body() category: RequestCreateCategoryDto) {
        return await this.categoryService.create(category);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() category: RequestUpdateCategoryDto) {
        return await this.categoryService.update(id, category);
    }
    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.categoryService.delete(id);
        return 'ok';
    }
}
