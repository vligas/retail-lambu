import { IsNotEmpty, IsNumber, IsDateString, IsString, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class RequestCreateTagDto {

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    @Transform(value => value.toLowerCase(), { toClassOnly: true })
    name: string;

}


export class RequestUpdateTagDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiModelProperty()
    // tslint:disable-next-line:variable-name
    id: number;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    // tslint:disable-next-line:variable-name
    name: string;

}

export class ResponseTagDto {
    name: string;
    id: number;

}


export class RequestTagDto {

    query: any;
    pageSize: number;
    page: number;
    include: any[];
}
