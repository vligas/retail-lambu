import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { FetchProductsForGap, SwitchGapers } from './gap.actions';
import { tap } from 'rxjs/operators';
import { ResponseGapDto } from '../../dto/gap.dto';
import { ReportsService } from '../../services/reports.service';


export interface GapStateModel {
    products: ResponseGapDto['products'];
    total: number;
}

@State<GapStateModel>({
    name: 'product',
    defaults: {
        products: [],
        total: 0
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

    @Action(FetchProductsForGap)
    FetchProductsForGap({ patchState }: StateContext<GapStateModel>, actions: FetchProductsForGap) {
        return this.reportsService.getProductsForGap(actions.differenceField1, actions.differenceField2, actions.options).pipe(
            tap(resp => {
                // if (resp.data === null || resp.data === undefined) {
                //     resp.data = [];
                // }

                patchState({ products: [...resp.data.products], total: resp.data.total });
            }, err => { console.log(err); })
        );
    }

    @Action(SwitchGapers)
    SwitchGapers(stateContext: StateContext<GapStateModel>) {
        let switchProducts = stateContext.getState().products;

        ///map
        switchProducts = switchProducts.map(p => {
            const diference0 = { ...p.differenceField1 };
            p.differenceField1 = { ...p.differenceField2 };
            p.differenceField2 = diference0;
            return p;
        });
        stateContext.patchState({ products: [...switchProducts] });
    }
}


