import { MaCambioprecio } from './maCambioprecio.entity';
import { Provider } from '@nestjs/common';

export const maCambioprecioProviders: Provider[] = [
    {
        provide: MaCambioprecio,
        useValue: MaCambioprecio,
    }
];