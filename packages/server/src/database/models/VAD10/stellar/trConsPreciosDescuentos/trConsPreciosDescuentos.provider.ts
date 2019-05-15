import { TrConsPreciosDescuentos } from './trConsPreciosDescuentos.entity';
import { Provider } from '@nestjs/common';

export const trConsPreciosDescuentosProviders: Provider[] = [
    {
        provide: TrConsPreciosDescuentos,
        useValue: TrConsPreciosDescuentos,
    }
];