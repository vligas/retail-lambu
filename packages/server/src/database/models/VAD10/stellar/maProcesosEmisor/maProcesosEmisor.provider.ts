import { MaProcesosEmisor } from './maProcesosEmisor.entity';
import { Provider } from '@nestjs/common';

export const maProcesosEmisorProviders: Provider[] = [
    {
        provide: MaProcesosEmisor,
        useValue: MaProcesosEmisor,
    }
];