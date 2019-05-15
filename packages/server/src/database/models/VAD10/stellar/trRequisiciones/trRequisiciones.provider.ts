import { TrRequisiciones } from './trRequisiciones.entity';
import { Provider } from '@nestjs/common';

export const trRequisicionesProviders: Provider[] = [
    {
        provide: TrRequisiciones,
        useValue: TrRequisiciones,
    }
];