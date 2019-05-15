import { Injectable, Inject, Delete } from '@nestjs/common';
import { Tag } from 'src/database/models/VAD10/tag/tag.entity';
import { RequestCreateTagDto, RequestUpdateTagDto, RequestTagDto } from './tag.dto';
import { Product } from 'src/database/models/VAD10/exProduct/product.entity';
import { TagProduct } from 'src/database/models/VAD10/tagProduct/tagProduct.entity';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class TagService {

    constructor(
        @Inject(Tag) private readonly tagRepository: typeof Tag,
        @Inject(Product) private readonly productRepository: typeof Product,
        @Inject(TagProduct) private readonly tagProductRepository: typeof TagProduct,
    ) { }

    async all(qs: RequestTagDto, options: ServiceOptions) {
        return await this.tagRepository.findAll({
            limit: options.pageSize,
            where: options.query,
            include: [{ model: this.productRepository }],
            order: [['id', 'ASC']]
        });
    }

    async byId(id: number) {
        const tag = await this.tagRepository.findOne({
            where: {
                id
            }
        });
        return tag;
    }

    async create(register: RequestCreateTagDto) {
        return await this.tagRepository.create(register);
    }

    async update(idTag: number, register: RequestUpdateTagDto) {
        const updateTag = await this.byId(idTag);
        return await updateTag.update(register);
    }

    async delete(id: number) {
        const tag = await this.byId(id);
        return await tag.destroy();
    }

    async getProductsForTag(id: number) {
        const tag = await this.productRepository.findAll({
            attributes: ['id', 'c_Codigo', 'c_Descri', 'n_Precio1'],
            include: [{
                model: this.tagRepository,
                where: {
                    id
                }
            }]
        });

        return tag.map(data => {
            const bazz = data.toJSON() as any;
            delete bazz.tags;
            return bazz;
        });
    }


    /**
     * TagProduct (nxm)
     * @param register 
     * @param codProduct 
     */
    async createForProduct(register: RequestCreateTagDto, codProduct: string) {
        try {
            const responseProduct = await this.productRepository.findOne({
                where: {
                    c_Codigo: codProduct
                }
            });
            if (responseProduct) {
                const [tag, created] = await this.tagRepository.findOrCreate({
                    where: {
                        name: register.name
                    },
                    defaults: { // set the default properties if it doesn't exist
                        name: register.name
                    }
                });
                console.log((!created) ? 'Tag Already Exists' : 'Created Tag...');

                const [tagProduct, created2] = await this.tagProductRepository.findOrCreate({
                    where: {
                        productId: responseProduct.id,
                        tagId: tag.id
                    },
                    defaults: {
                        productId: responseProduct.id,
                        tagId: tag.id
                    }
                });
                console.log((!created2) ? 'Relations Already Exists' : 'Created Relations...');
                return tag; /// SUCCESS!
            }
            else {
                const err = new Error('Product not exist');
                console.error(err);
                return err; /// ERROR!
            }
        } catch (err) {
            console.error(err);
            return err; /// ERROR!
        }
    }

    async deleteTagProduct(tagId: number, productId: number) {
        const nxm = await this.tagProductRepository.findOne({
            where: {
                tagId,
                productId
            }
        });
        await nxm.destroy();
    }

}

/* jose arreaza
11362200
mercantilcorriente
0105 0025 75 1025 3639 30 */