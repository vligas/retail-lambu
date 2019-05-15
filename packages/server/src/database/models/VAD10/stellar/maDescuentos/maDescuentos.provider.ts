import { MaDescuentos } from './maDescuentos.entity';
import { Provider } from '@nestjs/common';

export const maDescuentosProviders: Provider[] = [
    {
        provide: MaDescuentos,
        useValue: MaDescuentos,
    }
];