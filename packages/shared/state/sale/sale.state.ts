import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { FetchSales } from './sale.action';
import { tap } from 'rxjs/operators';
import { ResponseSaleDto } from '../../dto/sale.dto';
import { ReportsService } from '../../services/reports.service';


export interface SaleStateModel {
    sales: ResponseSaleDto['products'];
    total: number;
}

@State<SaleStateModel>({
    name: 'sale',
    defaults: {
        sales: [],
        total: 0
    }
})

export class SaleState {
    constructor(
        private store: Store,
        private reportsService: ReportsService
    ) { }


    @Selector()
    static getProductsWithSales(state: SaleStateModel) {
        return state.sales;
    }

    @Selector()
    static getTotalOfProducts(state: SaleStateModel) {
        return state.total;
    }


    @Action(FetchSales)
    FetchSales({ patchState }: StateContext<SaleStateModel>, actions: FetchSales) {
        return this.reportsService.getProductsForSale(actions.options).pipe(
            tap(resp => {
                patchState({ sales: [...resp.data.products], total: resp.data.total });
            }, err => { console.log(err); })
        );
    }


}
