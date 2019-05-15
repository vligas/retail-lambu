import { TrPendProductos } from './trPendProductos.entity';
import { Provider } from '@nestjs/common';

export const trPendProductosProviders: Provider[] = [
    {
        provide: TrPendProductos,
        useValue: TrPendProductos,
    }
];