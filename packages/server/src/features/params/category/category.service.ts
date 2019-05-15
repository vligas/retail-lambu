import { Injectable, Inject } from '@nestjs/common';
import { Category } from 'src/database/models/VAD10/category/category.entity';
import { RequestCreateCategoryDto, RequestUpdateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @Inject(Category) private readonly categoryRepository: typeof Category,
    ) { }

    async all() {
        return await this.categoryRepository.findAll();
    }

    async create(category: RequestCreateCategoryDto) {
        return await this.categoryRepository.create(category);
    }
    async one(id: number) {
        const category = await this.categoryRepository.findOne({
            where: {
                id
            }
        });
        return category;
    }
    async update(idCategory: number, category: RequestUpdateCategoryDto) {
        const updateCategory = await this.one(idCategory);
        return await updateCategory.update(category);
    }
    async delete(id: number) {
        const category = await this.one(id);
        await category.destroy();
    }


}