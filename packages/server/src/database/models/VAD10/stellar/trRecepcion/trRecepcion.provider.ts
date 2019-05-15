import { TrRecepcion } from './trRecepcion.entity';
import { Provider } from '@nestjs/common';

export const trRecepcionProviders: Provider[] = [
    {
        provide: TrRecepcion,
        useValue: TrRecepcion,
    }
];