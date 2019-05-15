import { Provider } from '@nestjs/common';
import { Currency } from './currency.entity';

export const currencyProviders: Provider[] = [
    {
        provide: Currency,
        useValue: Currency
    }
];