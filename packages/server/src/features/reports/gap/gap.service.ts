import { Injectable, Inject } from '@nestjs/common';
import { Prices, RequestListGapersDto, RequestGapersDto } from './gap.dto';
import sequelize = require('sequelize');
import { Product } from 'src/database/models/VAD10/exProduct/product.entity';
import * as moment from 'moment';
import { pipe } from 'ramda';
import { DollarPriceService } from 'src/features/params/dollarPrice/dollarPrice.service';
import { TrOdc } from 'src/database/models/VAD10/stellar/trOdc/trOdc.entity';
import { MaOdc } from 'src/database/models/VAD10/stellar/maOdc/maOdc.entity';
import { logger } from 'src/common/services/logger.service';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';

export interface GapOptions {
    attributes: Array<[any, string] | string>;
    include: any[];
    postProcessFunc: Array<() => Promise<Function>>;
    gapQuery: string[];
}

@Injectable()
export class GapService {

    constructor(
        @Inject(Product) private readonly productRepository: typeof Product,
        @Inject(TrOdc) private readonly trOdcRepository: typeof TrOdc,
        @Inject(MaOdc) private readonly maOdcRepository: typeof MaOdc,
        private readonly dollarService: DollarPriceService
    ) { }

    async getProductsWithGapBetween(price1: Prices, price2: Prices, options: ServiceOptions) {
        const gapOptions: GapOptions = {
            attributes: [
                'c_Codigo',
                'c_Descri',
                'n_Precio1',
                'n_Precio2',
                'n_Precio3',
            ],
            include: [],
            gapQuery: [],
            postProcessFunc: [async () => ((product) => product.toJSON())]
        };

        const mergedOptions = this.mergeOptions(
            gapOptions,
            
            this.getOptionsByPriceType(price1, 1),
            this.getOptionsByPriceType(price2, 2),
        );
        
        const gapQuery = `(${mergedOptions.gapQuery[1]} - ${mergedOptions.gapQuery[0]}) / nullif(${mergedOptions.gapQuery[0]}, 0) * 100`;
        let gapWhere;
       
        if (options.query.gap) {
            const operator = Object.keys(options.query.gap)[0];
            const gapQueryOperator = operator === '$lt' ? '<' : operator === '$gt' ? '>' : '';
            gapWhere = `${gapQuery} ${gapQueryOperator} ${options.query.gap[operator]}`;
            delete options.query.gap;
        }
      
        const { rows: products, count: total } = await this.productRepository.findAndCountAll({
           //...mergedOptions,
          attributes: [
                ...mergedOptions.attributes, 
                 [sequelize.literal(gapQuery), 'gap'], 
                 [sequelize.literal(mergedOptions.gapQuery[0]), 'gap1'], 
                 [sequelize.literal(mergedOptions.gapQuery[1]), 'gap2'],
                 //[sequelize.fn('sum', sequelize.col('gap')), 'sumGap']
            ],

           limit: options.pageSize,
           offset: options.pageSize * (options.page - 1),
           order: [['c_Codigo', 'DESC']],
            subQuery: false,
            where: gapWhere ? {
               $and: [options.query, sequelize.literal(gapWhere)]
            } : undefined
        });
       
        const postProcessFunction = pipe(...(await Promise.all(mergedOptions.postProcessFunc.map((func) => func()))));
        return {
            products: products.map(postProcessFunction),
            total,
        };
    }

    private mergeOptions(...options: GapOptions[]): GapOptions {

        return options.reduce((result, option) => {
            return {
                attributes: [...result.attributes, ...option.attributes],
                include: [...result.include, ...option.include],
                gapQuery: [...result.gapQuery, ...option.gapQuery],
                postProcessFunc: [...result.postProcessFunc, ...option.postProcessFunc]
            };
        }, {
                attributes: [],
                include: [],
                gapQuery: [],
                postProcessFunc: []
            });
    }

    private getOptionsByPriceType(priceType: Prices, field: number): GapOptions {
        switch (priceType) {
            case Prices.ActualPrice: {
                return {
                    attributes: [],
                    gapQuery: [`([n_Precio1] / (
                        select [price]
                        from [L0200mdDollarPrice]
                        where [date] <= getdate()
                        order by [date] desc
                        offset 0 rows fetch next 1 rows only
                    ))`],
                    include: [],
                    postProcessFunc: [async () => {
                        const actualDollarPrice = await this.dollarService.latest();
                        return (product) => {
                            const result = {
                                name: Prices.ActualPrice,
                                dollarPrice: actualDollarPrice.price,
                                bsPrice: product.n_Precio1,
                                date: actualDollarPrice.date
                            };
                            product[`differenceField${field}`] = result;

                            return product;
                        };
                    }]
                };
            }

            case Prices.BillingPrice: {
                break;

            }

            case Prices.PaymentPrice: {
                break;
            }

            case Prices.PurchasePrice: {
                return {
                    attributes: [
                        'n_CostoAct',
                        [sequelize.literal('(SELECT [price] FROM [L0200mdDollarPrice] WHERE CAST([date] as date) = [buyOrders->odc].[d_FECHA])'), Prices.PurchasePrice]
                    ],
                    gapQuery: [`(
                        [Product].[n_CostoAct] /
                        (SELECT [price] FROM [L0200mdDollarPrice] WHERE CAST([date] as date) = [buyOrders->odc].[d_FECHA])
                    )`],
                    include: [{
                        model: this.trOdcRepository,
                        attributes: {
                            exclude: ['id']
                        },
                        required: true,
                        include: [{
                            as: 'odc',
                            model: this.maOdcRepository,
                            required: true
                        }]
                    }],
                    postProcessFunc: [async () => {
                        return (product) => {
                            let lastBuy = product.buyOrders[0];
                            for (const odcRow of product.buyOrders) {
                                if (odcRow.odc.d_FECHA > lastBuy.odc.d_FECHA) {
                                    lastBuy = odcRow;
                                }
                            }

                            const result = {
                                name: Prices.PurchasePrice,
                                dollarPrice: product[Prices.PurchasePrice],
                                bsPrice: lastBuy.N_PRECIO_REP1,
                                date: lastBuy.odc.d_FECHA
                            };
                            product[`differenceField${field}`] = result;
                            delete product.buyOrders;
                            delete product[Prices.PurchasePrice];
                            return product;

                        };
                    }]
                };
            }

            case Prices.SalePrice: {
                return {
                    attributes: [
                        'dateOfPriceUpdate',
                        [sequelize.literal(`(
                            select [price]
                            from [L0200mdDollarPrice]
                            where [date] <= [Product].[dateOfPriceUpdate]
                            order by [date] desc
                            offset 0 rows fetch next 1 rows only
                        )`), Prices.SalePrice],
                    ],
                    gapQuery: [`([n_Precio1] / (
                        select [price]
                        from [L0200mdDollarPrice]
                        where [date] <= [Product].[dateOfPriceUpdate]
                        order by [date] desc
                        offset 0 rows fetch next 1 rows only
                    ))`],
                    include: [],
                    postProcessFunc: [async () => {
                        return (product) => {
                            const result = {
                                name: Prices.SalePrice,
                                dollarPrice: product[Prices.SalePrice],
                                bsPrice: product.n_Precio1,
                                date: product.dateOfPriceUpdate
                            };
                            delete product[Prices.SalePrice];
                            product[`differenceField${field}`] = result;

                            return product;
                        };
                    }]
                };
            }
            case Prices.SuggestedPrice: {
                return {
                    attributes: [
                        'dateOfPriceUpdate',
                        [sequelize.literal(`(
                            select [price]
                            from [L0200mdDollarPrice]
                            where [date] <= [Product].[dateOfPriceUpdate]
                            order by [date] desc
                            offset 0 rows fetch next 1 rows only
                        )`), Prices.SuggestedPrice],
                    ],
                    gapQuery: [`([n_Precio1] / (
                        select [price]
                        from [L0200mdDollarPrice]
                        where [date] <= [Product].[dateOfPriceUpdate]
                        order by [date] desc
                        offset 0 rows fetch next 1 rows only
                    ))`],
                    include: [],
                    postProcessFunc: [async () => {
                        const actualDollarPrice = await this.dollarService.latest();
                        return (product) => {
                            const result = {
                                name: Prices.SuggestedPrice,
                                dollarPrice: actualDollarPrice.price,
                                bsPrice: (product.n_Precio1 / product[Prices.SuggestedPrice]) * actualDollarPrice.price,
                                date: actualDollarPrice.date
                            };
                            delete product[Prices.SuggestedPrice];
                            product[`differenceField${field}`] = result;

                            return product;
                        };
                    }]
                };
            }

            default: {

            }
        }
    }

    async getProductWithBestGaper(gapers: RequestGapersDto[], options: ServiceOptions){
        let theBest = null; // el mejor 
        let modric: number = null; // el mejor promedio actualmente
        let gaperKeys: {
            gaperValue1: Prices,
            gaperValue2: Prices
        }

        for(let i=0 ; i <gapers.length; i++){
            let gaper= gapers[i];
            let sum: number= 0;

            const result= await this.getProductsWithGapBetween(gaper.gapper1, gaper.gapper2, options);
            
            for(let i=0; i< result.products.length; i++){ sum += result.products[i]['gap']; }
            sum= (sum!== 0)?(sum / result.total): sum;

            if(modric=== null){ // si no hay balon de oro definido
                modric= sum;
                theBest= result;
                gaperKeys= {
                    gaperValue1: gaper.gapper1,
                    gaperValue2: gaper.gapper2
                };
            }
            else if( sum < modric ){ // nuevo balon de oro
                modric= sum;
                theBest= result;
                gaperKeys= {
                    gaperValue1: gaper.gapper1,
                    gaperValue2: gaper.gapper2
                };
            }
        }
        return {...theBest, average: modric, gaperKeys: gaperKeys};
    }
}
