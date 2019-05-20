



export interface RequestCreateTagDto {

    
    
    
    
    name: string;

}


export interface RequestUpdateTagDto {

    
    
    
    // tslint:disable-next-line:variable-name
    id: number;

    
    
    
    // tslint:disable-next-line:variable-name
    name: string;

}

export interface ResponseTagDto {
    name: string;
    id: number;

}


export interface RequestTagDto {

    query: any;
    pageSize: number;
    page: number;
    include: any[];
}
