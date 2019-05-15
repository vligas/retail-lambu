import { Product } from '../../models/products.models';
import { Omit } from '../../utils';
import { Tag } from '../../models/tag.model';

export class FetchProducts {
    static readonly type = '[Product] Fetch all products';
    constructor(public options: {
        where?: any;
        pageSize: number;
        page: number;
    }
    ) { }
}

