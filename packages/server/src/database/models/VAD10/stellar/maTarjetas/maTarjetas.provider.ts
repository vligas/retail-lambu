import { MaTarjetas } from './maTarjetas.entity';
import { Provider } from '@nestjs/common';

export const maTarjetasProviders: Provider[] = [
    {
        provide: MaTarjetas,
        useValue: MaTarjetas,
    }
];