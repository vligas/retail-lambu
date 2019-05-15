import { Provider } from '@nestjs/common';
import { DollarPrice } from './dollarPrice.entity';

export const dollarPriceProviders: Provider[] = [
    {
        provide: DollarPrice,
        useValue: DollarPrice
    }
];