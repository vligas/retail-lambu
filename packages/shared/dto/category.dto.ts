


export interface RequestCreateCategoryDto {

    
    
    
    // tslint:disable-next-line:variable-name
    code: string;

    
    
    
    description: string;

}
export interface RequestUpdateCategoryDto {

    
    
    
    // tslint:disable-next-line:variable-name
    code: string;

    
    
    
    description: string;

}

export interface ResponseCreateCategoryDto {

    id: number;
    code: string;
    description: string;
}