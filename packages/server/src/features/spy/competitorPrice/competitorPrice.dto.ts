import { IsNumber, IsBase64, IsNumberString, IsString } from 'class-validator';

export class RequestCreateCompetitorPriceDto {
    @IsNumberString()
    price: string;

    @IsNumberString()
    branchId: string;

    @IsString()
    productId: string;

    // @IsBase64()
    // image: string;
}