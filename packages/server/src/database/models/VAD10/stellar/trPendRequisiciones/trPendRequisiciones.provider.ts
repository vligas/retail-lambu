import { TrPendRequisiciones } from './trPendRequisiciones.entity';
import { Provider } from '@nestjs/common';

export const trPendRequisicionesProviders: Provider[] = [
    {
        provide: TrPendRequisiciones,
        useValue: TrPendRequisiciones,
    }
];