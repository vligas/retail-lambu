import { MaProveedoresxcliente } from './maProveedoresxcliente.entity';
import { Provider } from '@nestjs/common';

export const maProveedoresxclienteProviders: Provider[] = [
    {
        provide: MaProveedoresxcliente,
        useValue: MaProveedoresxcliente,
    }
];