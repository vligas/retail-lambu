import { Product } from './product.entity';
import { Provider } from '@nestjs/common';

export const exProductProviders: Provider[] = [
    {
        provide: Product,
        useValue: Product,
    }
];