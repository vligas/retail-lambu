import { MaProgramadorPagos } from './maProgramadorPagos.entity';
import { Provider } from '@nestjs/common';

export const maProgramadorPagosProviders: Provider[] = [
    {
        provide: MaProgramadorPagos,
        useValue: MaProgramadorPagos,
    }
];