import { Product } from '@retail/shared/models/products.models';
import { Omit } from '@retail/shared/utils';
import { Tag } from '@retail/shared/models/tag.model';

export class FetchProducts {
    static readonly type = '[Product] Fetch all products';
    constructor(public options: {
        where?: any;
        pageSize: number;
        page: number;
    }
    ) { }
}

