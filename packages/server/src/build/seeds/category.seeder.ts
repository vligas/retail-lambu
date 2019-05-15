import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Category } from 'src/database/models/VAD10/category/category.entity';

export default class CategorySeeder implements SeedInterface {
    constructor(@Inject(Category) private entityRepository: typeof Category) { }

    async run() {

        for (let i = 1; i < 25; i++) {
            await this.entityRepository.create({
                code: `C0${i}`,
                description: 'Una description, que tal'
            });
        }

    }
}