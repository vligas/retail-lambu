import { DollarPrice } from '../../models';
import { Omit } from '../../../utils';

export class AddDollarPrice {
    static readonly type = '[DollarPrice] Add price';
    constructor(public payload: Omit<DollarPrice, 'id'>) { }
}

export class FetchDollarPrice {
    static readonly type = '[DollarPrice] Fetch all prices';
}

export class DeleteDollarPrice {
    static readonly type = '[DollarPrice] Delete price';
    constructor(public payload: number) { }
}

