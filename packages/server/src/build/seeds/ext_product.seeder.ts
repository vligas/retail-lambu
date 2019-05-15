import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../../database/models/VAD10/exProduct/product.entity';
import { DATABASEVAD10 } from '../../database/database.providers';
import * as moment from 'moment';

export default class ExtProductSeeder implements SeedInterface {
    constructor(
        @Inject(DATABASEVAD10) private db: Sequelize,
        @Inject(Product) private exProductRepository: typeof Product) { }

    async run() {

        // let products = [];
        const products = await this.exProductRepository.findAll({
            attributes: [
                'c_Codigo',
                'Update_Date'
            ]
        });

        let values = '';
        let count = 1;
        for (const product of products) {
            const date = product.Update_Date.toISOString().slice(0, 10);
            values += ` ('${product.c_Codigo}', '${moment.utc(new Date(date)).format('YYYY-MM-DD HH:mm:ss.SSS +00:00')}'),`;

            if (count % 1000 === 0) {
                values = values.substr(0, values.length - 1);
                values += ';';
                await this.db.query(`INSERT INTO L0200exProduct (productId, dateOfPriceUpdate)
                    VALUES ${values}`);

                values = '';
            }
            count++;
        }

        if (values.length > 0) {
            values = values.substr(0, values.length - 1);
            values += ';';
            await this.db.query(`INSERT INTO L0200exProduct (productId, dateOfPriceUpdate)
                VALUES ${values}`);
        }
    }

}