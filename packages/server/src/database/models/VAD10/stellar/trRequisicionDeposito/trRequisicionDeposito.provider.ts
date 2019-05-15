import { TrRequisicionDeposito } from './trRequisicionDeposito.entity';
import { Provider } from '@nestjs/common';

export const trRequisicionDepositoProviders: Provider[] = [
    {
        provide: TrRequisicionDeposito,
        useValue: TrRequisicionDeposito,
    }
];