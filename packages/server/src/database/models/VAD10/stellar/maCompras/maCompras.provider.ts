import { MaCompras } from './maCompras.entity';
import { Provider } from '@nestjs/common';

export const maComprasProviders: Provider[] = [
    {
        provide: MaCompras,
        useValue: MaCompras,
    }
];