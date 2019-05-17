import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { FetchProductsForPriceVariation } from './price-variation.actions';
import { tap } from 'rxjs/operators';
import { ResponsePriceVariationDto } from '../../dto/priceVariation.dto';
import { ReportsService } from '../../services/reports.service';

export interface PriceVariationStateModel {
    products: ResponsePriceVariationDto[];
}

@State<PriceVariationStateModel>({
    name: 'PriceVariationProduct',
    defaults: {
        products: []
    }
})

export class PriceVariationState {
    constructor(
        private store: Store,
        private reportsService: ReportsService
    ) { }

    @Selector()
    static getProductsWithVariation(state: PriceVariationStateModel) {
        return state.products;
    }

    @Action(FetchProductsForPriceVariation)
    FetchProductsForPriceVariation({ patchState }: StateContext<PriceVariationStateModel>, actions: FetchProductsForPriceVariation) {
        return this.reportsService.getProductsForPriceVariation(actions.payload).pipe(
            tap(resp => {
                if (resp.data === null || resp.data === undefined) {
                    resp.data = [];
                }

                patchState({ products: [...resp.data] });
            }, err => { console.log(err); })
        );
    }
}
