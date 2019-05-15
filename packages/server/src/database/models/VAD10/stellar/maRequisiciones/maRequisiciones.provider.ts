import { MaRequisiciones } from './maRequisiciones.entity';
import { Provider } from '@nestjs/common';

export const maRequisicionesProviders: Provider[] = [
    {
        provide: MaRequisiciones,
        useValue: MaRequisiciones,
    }
];