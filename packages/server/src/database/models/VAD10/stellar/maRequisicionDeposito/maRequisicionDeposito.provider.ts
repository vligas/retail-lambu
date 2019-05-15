import { MaRequisicionDeposito } from './maRequisicionDeposito.entity';
import { Provider } from '@nestjs/common';

export const maRequisicionDepositoProviders: Provider[] = [
    {
        provide: MaRequisicionDeposito,
        useValue: MaRequisicionDeposito,
    }
];