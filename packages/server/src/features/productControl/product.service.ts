import { Injectable, Inject } from '@nestjs/common';
import { Product } from 'src/database/models/VAD10/exProduct/product.entity';
import { TrOdc } from 'src/database/models/VAD10/stellar/trOdc/trOdc.entity';
import { MaOdc } from 'src/database/models/VAD10/stellar/maOdc/maOdc.entity';
import sequelize = require('sequelize');
import { RequestUpdateProductDto } from './product.dto';
import { MaProveedores } from 'src/database/models/VAD10/stellar/maProveedores/maProveedores.entity';
import { Tag } from 'src/database/models/VAD10/tag/tag.entity';
import { MaDepartamentos } from 'src/database/models/VAD10/stellar/maDepartamentos/maDepartamentos.entity';
import { MaGrupos } from 'src/database/models/VAD10/stellar/maGrupos/maGrupos.entity';
import { MaSubgrupos } from 'src/database/models/VAD10/stellar/maSubgrupos/maSubgrupos.entity';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ReqCurrency } from 'src/common/decorators/currency.decorator';
import { Currency } from 'src/database/models/VAD10/currency/currency.entity';

@Injectable()
export class ProductService {

    constructor(
        @Inject(Product) private readonly productRepository: typeof Product,
        @Inject(TrOdc) private readonly trOdcRepository: typeof TrOdc,
        @Inject(MaOdc) private readonly maOdcRepository: typeof MaOdc,
        @Inject(MaProveedores) private readonly maProviderRepository: typeof MaProveedores,
        @Inject(Tag) private readonly tagRepository: typeof Tag,
        @Inject(MaDepartamentos) private readonly maDepartamentRepository: typeof MaDepartamentos,
        @Inject(MaGrupos) private readonly maGroupRepository: typeof MaGrupos,
        @Inject(MaSubgrupos) private readonly maSubGroupRepository: typeof MaSubgrupos,

    ) { }

    async allSimple(@QueryOptions() options: ServiceOptions, @ReqCurrency() currency: Currency) {
        console.log(options);
        console.log(currency);
        let include = [];

        if (options.query.tagId) {
            include = [{
                model: this.tagRepository,
                where: {
                    id: options.query.tagId
                },
                attributes: []
            }];

            delete options.query.tagId;
        }
        const { rows: products, count: total } = await this.productRepository.findAndCountAll({
            attributes: ['id', 'c_Codigo', 'c_Descri', 'n_Precio1'],
            limit: options.pageSize,
            offset: options.pageSize * (options.page - 1),
            where: options.query,
            include
        });

        return {
            products: products.map(data => data.toJSON()),
            total
        };
    }

    async getByProductCod(code: string) {
        const product = await this.productRepository.findOne({
            include: [
                this.maDepartamentRepository,
                this.maGroupRepository,
                this.maSubGroupRepository
            ],
            where: {
                c_Codigo: code
            }
        });

        return product.toJSON();
    }

    async update(idProduct: string, product: RequestUpdateProductDto) {
        const updateProduct = await this.productRepository.findOne({
            where: {
                c_Codigo: idProduct
            }
        });

        return await updateProduct.update(product);
    }

    async getProvidersByProductCod(code: string) {
        const result = await this.maProviderRepository.findAll({
            // prod.c_Codigo, ma.c_DOCUMENTO, prov.c_codproveed, prov.c_descripcio
            attributes: [['c_codproveed', 'code'], ['c_descripcio', 'description']],

            include: [{
                attributes: ['c_DOCUMENTO'],
                model: this.maOdcRepository,
                required: true,
                include: [{
                    attributes: ['c_CODARTICULO'],
                    model: this.trOdcRepository,
                    required: true,
                    include: [{
                        attributes: ['c_Codigo'],
                        required: true,
                        model: this.productRepository,
                        where: {
                            c_Codigo: code
                        }
                    }]
                }]

            }]
        });

        return result.map(data => {
            const bazz = data.toJSON() as any;
            delete bazz.MaOdc;
            return bazz;
        });
    }

    async getTagsByProductCod(code: string) {

        const result = await this.tagRepository.findAll({
            include: [{
                attributes: ['c_Codigo'],
                required: true,
                model: this.productRepository,
                where: {
                    c_Codigo: code
                }
            }],
            attributes: ['name', 'id']
        });

        return result.map(data => {
            const bazz = data.toJSON() as any;
            delete bazz.exProducts;
            return bazz;
        });

    }

    async getProductsForDepartament(code: string) {
        const product = await this.productRepository.findOne({
            where: {
                c_Codigo: code
            }
        });

        const products = await this.productRepository.findAll({
            attributes: ['id', 'c_Codigo', 'c_Descri', 'n_Precio1'],
            where: {
                c_Departamento: product.c_Departamento
            }
        });

        return products.map(data => {
            return data.toJSON();
        });
    }

    async getProductsForGroup(code: string) {

        const product = await this.productRepository.findOne({
            where: {
                c_Codigo: code
            }
        });

        const products = await this.productRepository.findAll({
            attributes: ['id', 'c_Codigo', 'c_Descri', 'n_Precio1'],
            where: {
                c_Departamento: product.c_Departamento,
                c_Grupo: product.c_Grupo
            }
        });

        return products.map(data => {
            return data.toJSON();
        });
    }

    async getProductsForSubGrupo(code: string) {

        const product = await this.productRepository.findOne({
            where: {
                c_Codigo: code
            }
        });

        const products = await this.productRepository.findAll({
            attributes: ['id', 'c_Codigo', 'c_Descri', 'n_Precio1'],
            where: {
                c_Departamento: product.c_Departamento,
                c_Grupo: product.c_Grupo,
                c_Subgrupo: product.c_Subgrupo
            }
        });

        return products.map(data => {
            return data.toJSON();
        });
    }


}