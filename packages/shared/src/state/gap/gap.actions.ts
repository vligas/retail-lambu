import { RequestGapersDto } from '../../dto';
import { ServiceOptions } from '../../models';

export class FetchProductsForGap {
    static readonly type = '[GAP] Get all Product for GAP';
    constructor(
        public gapers: RequestGapersDto[],
        public options: ServiceOptions
    ) { }
}


