import { Product } from 'src/database/models/VAD10/exProduct/product.entity';
import { Injectable, Inject } from '@nestjs/common';
import sequelize = require('sequelize');
import * as moment from 'moment';
import { pipe } from 'ramda';
import { logger } from 'src/common/services/logger.service';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { TrInventario } from 'src/database/models/VAD10/stellar/trInventario/trInventario.entity';
import { Sequelize } from 'sequelize-typescript';
//import { Where } from "src/common/decorators/query/where.decorator";


@Injectable()
export class SaleService {

    constructor(
        @Inject(TrInventario) private readonly inventaryRepository: typeof TrInventario,
        @Inject(Product) private readonly productRepository: typeof Product
    ) { }

    async getProductsWithSales(options: ServiceOptions) {
        console.log('ENTRAAAAAAAAAAA');

        let where = {}

        if (options.query.c_CONCEPTO) {
            where['c_CONCEPTO'] = options.query.c_CONCEPTO;
            delete options.query.c_CONCEPTO;
        }

        if (options.query.f_fecha) {
            where['f_fecha'] = options.query.f_fecha;
            delete options.query.f_fecha;
        }



        console.log(where, 'where');
        console.log(options.query, 'query');

        const total = await this.productRepository.count({
            where: options.query
        });

        const products = await this.productRepository.findAll({
            subQuery: false,
            attributes: [
                'id',
                'c_Codigo',
                'c_Descri',
            ],
            limit: options.pageSize,
            offset: options.pageSize * (options.page - 1),
            where: options.query,
            include: [{
                required: false,
                model: this.inventaryRepository,
                attributes: [],
                where
            }],
            group: ['Product.id', 'Product.c_Codigo', 'Product.c_Descri'],
            order: [['id', 'DESC']]
        });

        return {
            products: products.map(data => data.toJSON()),
            total
        };
    }
}