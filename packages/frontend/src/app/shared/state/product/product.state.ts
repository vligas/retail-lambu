import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { FetchProducts } from './product.actions';
import { ProductService } from '../../services/product.service';
import { TagService } from '../../services/tag.service';
import { ResponseProductDto, ResponseSimpleProductDto } from '@retail/shared/dto/product.dto';
import { SimpleProductDto } from '@retail/shared/models/products.models';


export interface ProductStateModel {
    products: SimpleProductDto[];
    total: number;
}

@State<ProductStateModel>({
    name: 'Products',
    defaults: {
        products: [],
        total: 0
    }
})

export class ProductState {
    constructor(
        private store: Store,
        private productService: ProductService,
        private tagService: TagService
    ) { }

    @Selector()
    static getProducts(state: ProductStateModel) {
        return state.products;
    }

    @Selector()
    static getProductsCount(state: ProductStateModel) {
        return state.total;
    }


    @Action(FetchProducts)
    FetchProducts(stateContext: StateContext<ProductStateModel>, { options }: FetchProducts) {


        return this.productService.getProducts(options).pipe(
            tap(resp => {
                stateContext.patchState({ products: [...resp.data.products], total: resp.data.total });
            }, err => { console.log(err); })
        );

    }
}


