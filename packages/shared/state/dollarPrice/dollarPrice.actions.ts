import { DollarPrice } from '../../models/dollarPrice.model'
import { Omit } from '../../utils';

export class AddDollarPrice {
    private static readonly type = '[DollarPrice] Add price'
    constructor(public payload: Omit<DollarPrice, 'id'>) { }
}

export class FetchDollarPrice {
    private static readonly type = '[DollarPrice] Fetch all prices'
}

export class DeleteDollarPrice {
    private static readonly type = '[DollarPrice] Delete price'
    constructor(public payload: number) {}
}

