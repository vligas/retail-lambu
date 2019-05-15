import { MaTrazaFichas } from './maTrazaFichas.entity';
import { Provider } from '@nestjs/common';

export const maTrazaFichasProviders: Provider[] = [
    {
        provide: MaTrazaFichas,
        useValue: MaTrazaFichas,
    }
];