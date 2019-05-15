import { ResponseTagDto } from './tag.dto';






export interface RequestPriceVariationDto {
    tagId: number;
    query: any;
    pageSize: number;
    page: number;
}

export interface ResponsePriceVariationDto {
    c_Codigo: string;
    // tslint:disable-next-line:variable-name
    c_Descri: string;
    tags: ResponseTagDto[];
    n_Precio1: number;
    variation: number;
}
