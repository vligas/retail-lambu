export class FetchProductsForGap {
    static readonly type = '[GAP] Get all Product for GAP';
    constructor(
        public differenceField1: string,
        public differenceField2: string,
        public options: {
            where?: any;
            pageSize: number;
            page: number;
        }
    ) { }
}

export class SwitchGapers {
    static readonly type = '[GAP] Switch Gapers';
    constructor() { }
}

