import { MaProcesos } from './maProcesos.entity';
import { Provider } from '@nestjs/common';

export const maProcesosProviders: Provider[] = [
    {
        provide: MaProcesos,
        useValue: MaProcesos,
    }
];