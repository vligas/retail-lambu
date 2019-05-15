import { MaComprasDescuentos } from './maComprasDescuentos.entity';
import { Provider } from '@nestjs/common';

export const maComprasDescuentosProviders: Provider[] = [
    {
        provide: MaComprasDescuentos,
        useValue: MaComprasDescuentos,
    }
];