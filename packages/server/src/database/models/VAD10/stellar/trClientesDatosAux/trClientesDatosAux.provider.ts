import { TrClientesDatosAux } from './trClientesDatosAux.entity';
import { Provider } from '@nestjs/common';

export const trClientesDatosAuxProviders: Provider[] = [
    {
        provide: TrClientesDatosAux,
        useValue: TrClientesDatosAux,
    }
];