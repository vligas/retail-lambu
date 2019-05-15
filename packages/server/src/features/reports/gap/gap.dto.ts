import { IsNotEmpty, IsNumber, IsDateString, IsEnum } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export enum Prices {
    BillingPrice = 'Precio de Facturacion',
    PaymentPrice = 'Precio de Pago',
    PurchasePrice = 'Precio de Compra',
    SalePrice = 'Precio de Venta',
    SuggestedPrice = 'Precio Sugerido',
    ActualPrice = 'Precio Actual'
}

export class RequestGapersDto{
    @ApiModelProperty()
    @IsEnum(Prices)
    gapper1: Prices;


    @ApiModelProperty()
    @IsEnum(Prices)
    gapper2: Prices;
}

export class RequestListGapersDto{
    gapers: RequestGapersDto[];
}

export class RequestGapDto {

    @ApiModelProperty()
    @IsEnum(Prices)
    differenceField1: Prices;

    @ApiModelProperty()
    @IsEnum(Prices)
    differenceField2: Prices;

}

export interface ResponseGapDto {

    products: Array<{
        c_Codigo: string;
        // tslint:disable-next-line:variable-name
        c_Descri: string;
        n_Precio1: number;
        n_Precio2: number;
        n_Precio3: number;

        gap: number;
        gap1: number;
        gap2: number;

        differenceField1: {
            name: string;
            dollarPrice: number;
            bsPrice: number;
            date: Date;
        };

        differenceField2: {
            name: string;
            dollarPrice: number;
            bsPrice: number;
            date: Date;
        };

    }>;

    total: number;

    average: number;

    gaperKeys: {
        gaperValue1: Prices;
        gaperValue2: Prices;
    }
}