import { MaErrores } from './maErrores.entity';
import { Provider } from '@nestjs/common';

export const maErroresProviders: Provider[] = [
    {
        provide: MaErrores,
        useValue: MaErrores,
    }
];