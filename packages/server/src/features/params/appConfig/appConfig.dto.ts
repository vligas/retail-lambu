import { IsOptional } from 'class-validator';

export class RequestUpdateConfigDto {
    @IsOptional()
    'default-fields-gap': {
        value: {
            defaultPrices: Array<{
                gapper1: string;
                gapper2: string
            }>
        }
    };
}