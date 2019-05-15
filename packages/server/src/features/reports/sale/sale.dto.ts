

export class RequestSaleDto {

    query: any;
    pageSize: number;
    page: number;
}

export interface ResponseSaleDto {
    products: Array<{
        id: number,
        c_Codigo: number,
        c_Descri: string,
        sales: number;
        totalAmountSales: number;
    }>;
    total: number;
}