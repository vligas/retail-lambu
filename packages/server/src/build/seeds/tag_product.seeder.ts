import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Tag } from 'src/database/models/VAD10/tag/tag.entity';
import { Product } from 'src/database/models/VAD10/exProduct/product.entity';
import * as faker from 'faker';


export default class TagProductSeeder implements SeedInterface {
    constructor(
        @Inject(Tag) private tagRepository: typeof Tag,
        @Inject(Product) private productRepository: typeof Product
    ) { }

    async run() {
        const tags = await this.tagRepository.findAll();
        const products = await this.productRepository.findAll();

        for (const product of products) {
            await product.$set('tags', [tags[0], tags[1]]);
            // await (product as any).setTags([tags[0], tags[1]]);
        }
    }
}