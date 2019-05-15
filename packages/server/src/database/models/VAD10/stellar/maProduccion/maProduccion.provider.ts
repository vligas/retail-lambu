import { MaProduccion } from './maProduccion.entity';
import { Provider } from '@nestjs/common';

export const maProduccionProviders: Provider[] = [
    {
        provide: MaProduccion,
        useValue: MaProduccion,
    }
];