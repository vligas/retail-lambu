import { RequestGapersDto } from '../../src/dto';
import { ServiceOptions } from '../../src/models';

export class FetchProductsForGap {
    static readonly type = '[GAP] Get all Product for GAP';
    constructor(
        public gapers: RequestGapersDto[],
        public options: ServiceOptions
    ) { }
}


