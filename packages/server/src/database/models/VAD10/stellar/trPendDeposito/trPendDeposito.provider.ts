import { TrPendDeposito } from './trPendDeposito.entity';
import { Provider } from '@nestjs/common';

export const trPendDepositoProviders: Provider[] = [
    {
        provide: TrPendDeposito,
        useValue: TrPendDeposito,
    }
];