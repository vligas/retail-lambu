import { TrProduccion } from './trProduccion.entity';
import { Provider } from '@nestjs/common';

export const trProduccionProviders: Provider[] = [
    {
        provide: TrProduccion,
        useValue: TrProduccion,
    }
];