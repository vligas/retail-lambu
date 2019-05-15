import { MaSolicitud } from './maSolicitud.entity';
import { Provider } from '@nestjs/common';

export const maSolicitudProviders: Provider[] = [
    {
        provide: MaSolicitud,
        useValue: MaSolicitud,
    }
];