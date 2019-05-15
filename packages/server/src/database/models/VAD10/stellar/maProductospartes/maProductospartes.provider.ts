import { MaProductospartes } from './maProductospartes.entity';
import { Provider } from '@nestjs/common';

export const maProductospartesProviders: Provider[] = [
    {
        provide: MaProductospartes,
        useValue: MaProductospartes,
    }
];