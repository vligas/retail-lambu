import { MaProductos } from './maProductos.entity';
import { Provider } from '@nestjs/common';

export const maProductosProviders: Provider[] = [
    {
        provide: MaProductos,
        useValue: MaProductos,
    }
];