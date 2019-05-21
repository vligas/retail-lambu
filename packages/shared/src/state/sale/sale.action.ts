export class FetchSales {
    static readonly type = '[Sales] Get all Product with sales';
    constructor(
        public options: {
            where?: any;
            pageSize: number;
            page: number;
        }
    ) { }
}
