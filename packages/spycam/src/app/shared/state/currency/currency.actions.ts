import { Currency } from '../../models/currency.model';
import { Omit } from '../../utils';
import { CurrencyHistoric } from '../../models/currencyHistoric.model';
import { Price } from '../../models/price.model';

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

export class AddPrice {
    static readonly type = '[CurrencyHistoricPrice] Add price';
    constructor(public payload: Price) { }
}

export class DeletePrice {
    static readonly type = '[CurrencyHistoricPrice] Delete price';
    constructor(public currencyId: number, public historicId: number) { }
}
