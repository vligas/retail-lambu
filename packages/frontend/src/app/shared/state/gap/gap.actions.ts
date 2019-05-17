import { RequestGapersDto } from '@retail/shared/dto/gap.dto';
import { ServiceOptions } from '@retail/shared/models/queryOptions.model';

export class FetchProductsForGap {
    static readonly type = '[GAP] Get all Product for GAP';
    constructor(
        public gapers: RequestGapersDto[],
        public options: ServiceOptions
    ) { }
}


