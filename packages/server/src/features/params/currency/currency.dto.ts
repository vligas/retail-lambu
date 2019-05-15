import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { number, strict } from 'joi';


export class RequestAllCurrencyDto {

    query: any;
    pageSize: number;
    page: number;
    include: [];
}

export class ResponseAllCurrencyDto {
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

export class RequestCreateCurrencyHistoricDto {
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsDateString()
    @IsNotEmpty()
    @ApiModelProperty()
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

export class RequestCreateCurrencyDto {

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    denomination: string;
}

export class ResponseCreateCurrencyDto {
    name: string;
    denomination: string;
    id: number;
}

export class RequestUpdateCurrencyDto {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    denomination: string;
}


export class ResponseCreateCurrencyHistoricDto {
    id: number;
    price: number;
    date: string;
    currencyId: number;
}