import { TrSolicitud } from './trSolicitud.entity';
import { Provider } from '@nestjs/common';

export const trSolicitudProviders: Provider[] = [
    {
        provide: TrSolicitud,
        useValue: TrSolicitud,
    }
];