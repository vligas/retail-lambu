import { Provider } from '@nestjs/common';
import { CurrencyHistory } from './currencyHistory.entity';

export const currencyHistoryProviders: Provider[] = [
    {
        provide: CurrencyHistory,
        useValue: CurrencyHistory
    }
];