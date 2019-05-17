
export class FetchProducts {
    static readonly type = '[Product] Fetch all products';
    constructor(public options: {
        where?: any;
        pageSize: number;
        page: number;
    }
    ) { }
}

