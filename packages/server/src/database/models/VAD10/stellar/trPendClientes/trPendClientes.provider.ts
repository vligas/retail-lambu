import { TrPendClientes } from './trPendClientes.entity';
import { Provider } from '@nestjs/common';

export const trPendClientesProviders: Provider[] = [
    {
        provide: TrPendClientes,
        useValue: TrPendClientes,
    }
];