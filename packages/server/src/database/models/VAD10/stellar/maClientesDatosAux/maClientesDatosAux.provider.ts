import { MaClientesDatosAux } from './maClientesDatosAux.entity';
import { Provider } from '@nestjs/common';

export const maClientesDatosAuxProviders: Provider[] = [
    {
        provide: MaClientesDatosAux,
        useValue: MaClientesDatosAux,
    }
];