import { MaProveedoresxretenciones } from './maProveedoresxretenciones.entity';
import { Provider } from '@nestjs/common';

export const maProveedoresxretencionesProviders: Provider[] = [
    {
        provide: MaProveedoresxretenciones,
        useValue: MaProveedoresxretenciones,
    }
];