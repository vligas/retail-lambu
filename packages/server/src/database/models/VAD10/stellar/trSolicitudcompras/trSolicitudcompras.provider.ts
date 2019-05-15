import { TrSolicitudcompras } from './trSolicitudcompras.entity';
import { Provider } from '@nestjs/common';

export const trSolicitudcomprasProviders: Provider[] = [
    {
        provide: TrSolicitudcompras,
        useValue: TrSolicitudcompras,
    }
];