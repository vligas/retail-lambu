import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { FetchProductsForGap } from './gap.actions';
import { tap } from 'rxjs/operators';
import { ResponseGapDto, Prices, RequestGapersDto } from '../../dto/gap.dto';
import { ReportsService } from '../../services/reports.service';


export interface GapStateModel {
    products: ResponseGapDto['products'];
    total: number;
    gaperValue1: Prices;
    gaperValue2: Prices;
}

@State<GapStateModel>({
    name: 'product',
    defaults: {
        products: [],
        total: 0,
        gaperValue1: null,
        gaperValue2: null
    }
})

export class GapState {
    constructor(
        private store: Store,
        private reportsService: ReportsService
    ) { }

    @Selector()
    static getProductsWithCost(state: GapStateModel) {
        return state.products;
    }

    @Selector()
    static getTotalOfProducts(state: GapStateModel) {
        return state.total;
    }

    @Selector()
    static getGappersProducts(state: GapStateModel) {
        let gappers: RequestGapersDto = {
            gapper1: state.gaperValue1,
            gapper2: state.gaperValue2
        }
        return gappers;
    }

    @Action(FetchProductsForGap)
    FetchProductsForGap({ patchState }: StateContext<GapStateModel>, actions: FetchProductsForGap) {
        return this.reportsService.getProductsForGap(actions.gapers, actions.options).pipe(
            tap(resp => {
                patchState({
                    products: [...resp.data.products],
                    total: resp.data.total,
                    gaperValue1: resp.data.gaperKeys.gaperValue1,
                    gaperValue2: resp.data.gaperKeys.gaperValue2
                });
            }, err => { console.log(err); })
        );
    }


}


