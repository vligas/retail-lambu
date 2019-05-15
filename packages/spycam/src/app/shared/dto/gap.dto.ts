


export enum Prices {
    BillingPrice = 'Precio de Facturacion',
    PurchasePrice = 'Precio de Compra',
    PaymentPrice = 'Precio de Pago',
    SalePrice = 'Precio de Venta',
    SuggestedPrice = 'Precio Sugerido',
    ActualPrice = 'Precio Actual'
}

export interface RequestGapDto {

    
    
    differenceField1: Prices;

    
    
    differenceField2: Prices;

    query: any;
    pageSize: number;
    page: number;
    include: any[];
}

export interface ResponseGapDto {

    products: Array<{
        c_Codigo: string;
        // tslint:disable-next-line:variable-name
        c_Descri: string;
        n_Precio1: number;
        n_Precio2: number;
        n_Precio3: number;

        gap: number;
        gap1: number;
        gap2: number;

        differenceField1: {
            name: string;
            dollarPrice: number;
            bsPrice: number;
            date: Date;
        };

        differenceField2: {
            name: string;
            dollarPrice: number;
            bsPrice: number;
            date: Date;
        };

    }>;

    total: number;
}