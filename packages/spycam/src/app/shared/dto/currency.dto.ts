




export interface RequestAllCurrencyDto {

    query: any;
    pageSize: number;
    page: number;
    include: [];
}

export interface ResponseAllCurrencyDto {
    id: number;
    name: string;
    denomination: string;
    lastPrice?: {
        id: number,
        date: string
        price: number
        currencyId: number
    };
}

export interface RequestCreateCurrencyHistoricDto {
    
    
    price: number;

    
    
    
    date: string;
}

export interface ResponseCurrencyWithValues extends ResponseAllCurrencyDto {
    values: Array<{
        id: number,
        date: string
        price: number
        currencyId: number
    }>;
}

export interface RequestCreateCurrencyDto {

    
    
    
    name: string;

    
    
    
    denomination: string;
}

export interface ResponseCreateCurrencyDto {
    name: string;
    denomination: string;
    id: number;
}

export interface RequestUpdateCurrencyDto {
    name: string;
    denomination: string;
}


export interface ResponseCreateCurrencyHistoricDto {
    id: number;
    price: number;
    date: string;
    currencyId: number;
}