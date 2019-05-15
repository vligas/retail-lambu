
import { IsNotEmpty, IsNumber, IsDateString, IsEnum } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ResponseTagDto } from 'src/features/params/tag/tag.dto';


export class RequestPriceVariationDto {
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
