import { TrComprasDescuentos } from './trComprasDescuentos.entity';
import { Provider } from '@nestjs/common';

export const trComprasDescuentosProviders: Provider[] = [
    {
        provide: TrComprasDescuentos,
        useValue: TrComprasDescuentos,
    }
];