import { MaConsPrecios } from './maConsPrecios.entity';
import { Provider } from '@nestjs/common';

export const maConsPreciosProviders: Provider[] = [
    {
        provide: MaConsPrecios,
        useValue: MaConsPrecios,
    }
];