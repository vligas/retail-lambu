import { Currency, Price } from '../../models';
import { Omit } from '../../utils';

export class AddCurrency {
    static readonly type = '[Currency] Add Currency';
    constructor(public payload: Omit<Currency, 'id'>) { }
}

export class FetchCurrency {
    static readonly type = '[Currency] Fetch All Currencys';
}

export class DeleteCurrency {
    static readonly type = '[Currency] Delete Currency';
    constructor(public payload: number) { }
}

export class UpdateCurrency {
    static readonly type = '[Currency] Update currency';
    constructor(public payload: Currency) { }
}

export class FetchCurrencyHistoric {
    static readonly type = '[CurrencyHistoric] Fetch All CurrencysHistorics';
    constructor(public payload: number) { }
}

export class ChangeSelectCurrency {
    static readonly type = '[CurrencySelect] Fetch Select CurrencySelecteds';
    constructor(public currency: Currency) { }
}

export class AddPrice {
    static readonly type = '[CurrencyHistoricPrice] Add price';
    constructor(public payload: Price) { }
}

export class DeletePrice {
    static readonly type = '[CurrencyHistoricPrice] Delete price';
    constructor(public currencyId: number, public historicId: number) { }
}
