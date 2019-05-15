import { TrPendProveedor } from './trPendProveedor.entity';
import { Provider } from '@nestjs/common';

export const trPendProveedorProviders: Provider[] = [
    {
        provide: TrPendProveedor,
        useValue: TrPendProveedor,
    }
];