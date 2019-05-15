import { IsString, IsNotEmpty, IsNumber, IsEmpty, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RequestCreateCategoryDto {

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    // tslint:disable-next-line:variable-name
    code: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty()
    description: string;

}
export class RequestUpdateCategoryDto {

    @IsString()
    @IsOptional()
    @ApiModelProperty()
    // tslint:disable-next-line:variable-name
    code: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty()
    description: string;

}

export class ResponseCreateCategoryDto {

    id: number;
    code: string;
    description: string;
}