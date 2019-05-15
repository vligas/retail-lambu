import { TagProduct } from './tagProduct.entity';
import { Provider } from '@nestjs/common';

export const tagProductProviders: Provider[] = [
    {
        provide: TagProduct,
        useValue: TagProduct,
    }
];