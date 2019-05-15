import { TrPendProveedoresxretenciones } from './trPendProveedoresxretenciones.entity';
import { Provider } from '@nestjs/common';

export const trPendProveedoresxretencionesProviders: Provider[] = [
    {
        provide: TrPendProveedoresxretenciones,
        useValue: TrPendProveedoresxretenciones,
    }
];