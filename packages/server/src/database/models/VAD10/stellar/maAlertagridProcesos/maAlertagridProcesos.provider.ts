import { MaAlertagridProcesos } from './maAlertagridProcesos.entity';
import { Provider } from '@nestjs/common';

export const maAlertagridProcesosProviders: Provider[] = [
    {
        provide: MaAlertagridProcesos,
        useValue: MaAlertagridProcesos,
    }
];