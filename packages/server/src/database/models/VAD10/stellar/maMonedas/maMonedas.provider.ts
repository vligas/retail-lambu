import { MaMonedas } from './maMonedas.entity';
import { Provider } from '@nestjs/common';

export const maMonedasProviders: Provider[] = [
    {
        provide: MaMonedas,
        useValue: MaMonedas,
    }
];