import { Currency } from '../../models/currency.model';
import { Omit } from '../../utils';
import { CurrencyHistoric } from '../../models/currencyHistoric.model';
import { Price } from '../../models/price.model';

export class AddCurrency {
    private static readonly type = '[Currency] Add Currency';
    constructor(public payload: Omit<Currency, 'id'>) { }
}

export class FetchCurrency {
    private static readonly type = '[Currency] Fetch All Currencys';
}

export class DeleteCurrency {
    private static readonly type = '[Currency] Delete Currency';
    constructor(public payload: number) { }
}

export class UpdateCurrency {
    private static readonly type = '[Currency] Update currency';
    constructor(public payload: Currency) { }
}

export class FetchCurrencyHistoric {
    private static readonly type = '[CurrencyHistoric] Fetch All CurrencysHistorics';
    constructor(public payload: number) { }
}

export class ChangeSelectCurrency {
    private static readonly type = '[CurrencySelect] Fetch Select CurrencySelecteds';
    constructor(public currency: Currency) { }
}

export class AddPrice {
    private static readonly type = '[CurrencyHistoricPrice] Add price';
    constructor(public payload: Price) { }
}

export class DeletePrice {
    private static readonly type = '[CurrencyHistoricPrice] Delete price';
    constructor(public currencyId: number, public historicId: number) { }
}
