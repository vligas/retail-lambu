import { MaClientes } from './maClientes.entity';
import { Provider } from '@nestjs/common';

export const maClientesProviders: Provider[] = [
    {
        provide: MaClientes,
        useValue: MaClientes,
    }
];