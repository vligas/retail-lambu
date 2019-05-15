import { TrAutorizacionesRecepcion } from './trAutorizacionesRecepcion.entity';
import { Provider } from '@nestjs/common';

export const trAutorizacionesRecepcionProviders: Provider[] = [
    {
        provide: TrAutorizacionesRecepcion,
        useValue: TrAutorizacionesRecepcion,
    }
];