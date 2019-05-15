import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Currency } from '../../models/currency.model';
import { AddCurrency, DeleteCurrency, FetchCurrency, UpdateCurrency, FetchCurrencyHistoric, AddPrice, DeletePrice } from './currency.actions';
import { CurrencyService } from '../../services/currency.service';
import { tap } from 'rxjs/operators';
import { CurrencyHistoric } from '../../models/currencyHistoric.model';

export class CurrencyStateModel {
    currencies: Currency[];
    currencyHistoric: CurrencyHistoric;
}

@State<CurrencyStateModel>({
    name: 'currency',
    defaults: {
        currencies: [],
        currencyHistoric: { id: 0, denomination: '', name: '', values: [] }
    }
})
export class CurrencyState {

    constructor(
        private currencyService: CurrencyService
    ) { }

    @Selector()
    static getCurrencies(state: CurrencyStateModel) {
        return state.currencies;
    }

    @Selector()
    static getCurrencyHistoric(state: CurrencyStateModel) {
        return state.currencyHistoric;
    }

    @Action(AddCurrency)
    add({ getState, patchState }: StateContext<CurrencyStateModel>, { payload }: AddCurrency) {
        return this.currencyService.postCurrency(payload).pipe(
            tap((resp) => {
                const state = getState();
                patchState({
                    currencies: [...state.currencies, resp.data]
                });
            })
        );
    }
    @Action(FetchCurrency)
    fetch({ patchState }: StateContext<CurrencyStateModel>) {
        return this.currencyService.getAllCurrencies().pipe(
            tap((resp) => {
                patchState({
                    currencies: [...resp.data]
                });
            })
        );
    }
    @Action(DeleteCurrency)
    delete({ patchState, getState }: StateContext<CurrencyStateModel>, { payload }: DeleteCurrency) {
        return this.currencyService.deleteCurrency(payload).pipe(
            tap(resp => {
                const state = getState();
                patchState({
                    currencies: state.currencies.filter(currency => currency.id !== payload)
                });
            })
        );
    }
    @Action(UpdateCurrency)
    update({ patchState, getState }: StateContext<CurrencyStateModel>, { payload }: UpdateCurrency) {
        return this.currencyService.updateCurrency(payload.id, payload).pipe(
            tap(resp => {
                const state = getState();
                const currentCurrency = state.currencies.find(currency => {
                    return (currency.id === payload.id);
                });

                currentCurrency.denomination = payload.denomination;
                currentCurrency.name = payload.name;
                patchState({
                    currencies: state.currencies
                });
            })
        );
    }

    @Action(FetchCurrencyHistoric)
    fetchHistoric({ patchState }: StateContext<CurrencyStateModel>, { payload }: FetchCurrencyHistoric) {
        return this.currencyService.getAllHistoricByCurrencyId(payload).pipe(
            tap(resp => {
                patchState({
                    currencyHistoric: resp.data
                });
            })
        );
    }

    @Action(AddPrice)
    addPrice({ patchState, getState }: StateContext<CurrencyStateModel>, { payload }: AddPrice) {
        return this.currencyService.postPrice(payload.currencyId, payload).pipe(
            tap((resp) => {
                const state = getState();
                state.currencyHistoric.values.push(resp.data);
                patchState({
                    currencyHistoric: state.currencyHistoric
                });
            })
        );
    }


    @Action(DeletePrice)
    deletePrice({ patchState, getState }: StateContext<CurrencyStateModel>, { currencyId, historicId }: DeletePrice) {
        return this.currencyService.deletePrice(currencyId, historicId).pipe(
            tap((resp) => {
                const state = getState();
                state.currencyHistoric.values = state.currencyHistoric.values.filter(price => price.id !== historicId);
                patchState({
                    currencyHistoric: state.currencyHistoric
                });
            })
        );
    }



}