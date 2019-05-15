import { MaSincronizacion } from './maSincronizacion.entity';
import { Provider } from '@nestjs/common';

export const maSincronizacionProviders: Provider[] = [
    {
        provide: MaSincronizacion,
        useValue: MaSincronizacion,
    }
];