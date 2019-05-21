import { State, Action, StateContext, Selector } from '@ngxs/store';
import { DollarPrice } from '../../src/models';
import { AddDollarPrice, DeleteDollarPrice, FetchDollarPrice } from './dollarPrice.actions';
import { DollarPriceService } from '../../services/dollarPrice.service';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

export class DollarPriceStateModel {
    dollarPrices: DollarPrice[];
    actualDollarPrice: DollarPrice;
}

@State<DollarPriceStateModel>({
    name: 'dollarPrice',
    defaults: {
        dollarPrices: [],
        actualDollarPrice: null
    }
})
export class DollarPriceState {

    constructor(
        private dollarPriceService: DollarPriceService
    ) { }

    @Selector()
    static getDollarPrices(state: DollarPriceStateModel) {
        return state.dollarPrices;
    }

    @Selector()
    static actualPrice(state: DollarPriceStateModel) {
        return state.actualDollarPrice;
    }

    @Action(AddDollarPrice)
    add({ getState, patchState }: StateContext<DollarPriceStateModel>, { payload }: AddDollarPrice) {
        return this.dollarPriceService.postDollarPrice(payload).pipe(
            tap((resp) => {
                const state = getState();
                patchState({
                    dollarPrices: [...state.dollarPrices, resp.data]
                });

            })
        );
    }
    @Action(FetchDollarPrice)
    fetch({ patchState }: StateContext<DollarPriceStateModel>) {
        const allDollarPrices = this.dollarPriceService.getAllDollarPrices();
        const latestDollarPrice = this.dollarPriceService.getLatestDollarPrice();

        return forkJoin(allDollarPrices, latestDollarPrice).pipe(
            tap(resp => {
                patchState({
                    dollarPrices: [...resp[0].data],
                    actualDollarPrice: resp[1].data
                });
                // return resp[0].data;
            })
        );
        // return this.dollarPriceService.getAllDollarPrices().pipe(
        //     tap((resp) => {
        //         patchState({
        //             dollarPrices: [...resp.data]
        //         });
        //     })
        // );
    }
    @Action(DeleteDollarPrice)
    delete({ patchState, getState }: StateContext<DollarPriceStateModel>, { payload }: DeleteDollarPrice) {
        return this.dollarPriceService.deleteDollarPrice(payload).pipe(
            tap(resp => {
                const state = getState();
                patchState({
                    dollarPrices: state.dollarPrices.filter(price => price.id !== payload)
                });
            })
        );
    }
}