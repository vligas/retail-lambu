import { MaDeposito } from './maDeposito.entity';
import { Provider } from '@nestjs/common';

export const maDepositoProviders: Provider[] = [
    {
        provide: MaDeposito,
        useValue: MaDeposito,
    }
];