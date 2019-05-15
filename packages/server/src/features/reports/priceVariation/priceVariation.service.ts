import { Injectable, Inject } from '@nestjs/common';
import sequelize = require('sequelize');
import { Product } from 'src/database/models/VAD10/exProduct/product.entity';
import * as moment from 'moment';
import { pipe } from 'ramda';
import { logger } from 'src/common/services/logger.service';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { TagService } from 'src/features/params/tag/tag.service';
import { Tag } from 'src/database/models/VAD10/tag/tag.entity';

@Injectable()
export class PriceVariationService {

    constructor(
        @Inject(Tag) private readonly tagRepository: typeof Tag,
        @Inject(Product) private readonly productRepository: typeof Product,
        private readonly tagService: TagService
    ) { }

    async getProducts(options: ServiceOptions) {
        const tag = await this.productRepository.findAll({
            attributes: [
                'id',
                'c_Codigo',
                'c_Descri',
                'n_Precio1'
            ],
            include: [{
                model: this.tagRepository,
                where: {
                    id: options.query.tagId
                }
            }],
            order: [
                ['n_Precio1', 'DESC']
            ]
        });

        const product = tag[0];
        return tag.map(data => {
            const bazz = data.toJSON() as any;
            bazz['variation'] = ((product.n_Precio1 - bazz.n_Precio1) / product.n_Precio1) * 100;
            return bazz;
        });
    }
}