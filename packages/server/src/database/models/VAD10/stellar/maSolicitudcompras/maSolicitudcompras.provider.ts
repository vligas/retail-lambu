import { MaSolicitudcompras } from './maSolicitudcompras.entity';
import { Provider } from '@nestjs/common';

export const maSolicitudcomprasProviders: Provider[] = [
    {
        provide: MaSolicitudcompras,
        useValue: MaSolicitudcompras,
    }
];