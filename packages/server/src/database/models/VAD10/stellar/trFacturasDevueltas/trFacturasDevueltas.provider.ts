import { TrFacturasDevueltas } from './trFacturasDevueltas.entity';
import { Provider } from '@nestjs/common';

export const trFacturasDevueltasProviders: Provider[] = [
    {
        provide: TrFacturasDevueltas,
        useValue: TrFacturasDevueltas,
    }
];