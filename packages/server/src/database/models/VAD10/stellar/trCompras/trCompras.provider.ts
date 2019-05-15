import { TrCompras } from './trCompras.entity';
import { Provider } from '@nestjs/common';

export const trComprasProviders: Provider[] = [
    {
        provide: TrCompras,
        useValue: TrCompras,
    }
];