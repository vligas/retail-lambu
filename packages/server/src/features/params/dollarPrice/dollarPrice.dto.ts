import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RequestCreateDollarPriceDto {

    @IsDateString()
    @IsNotEmpty()
    @ApiModelProperty()
    date: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiModelProperty()
    price: number;
}

export class ResponseCreateDollarPriceDto {
    date: string;
    price: number;
    id: number;
}