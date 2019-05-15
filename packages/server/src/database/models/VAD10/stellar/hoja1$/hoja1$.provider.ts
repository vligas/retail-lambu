import { Hoja1$ } from './hoja1$.entity';
import { Provider } from '@nestjs/common';

export const hoja1$Providers: Provider[] = [
    {
        provide: Hoja1$,
        useValue: Hoja1$,
    }
];