import { MaOdcDescuentos } from './maOdcDescuentos.entity';
import { Provider } from '@nestjs/common';

export const maOdcDescuentosProviders: Provider[] = [
    {
        provide: MaOdcDescuentos,
        useValue: MaOdcDescuentos,
    }
];