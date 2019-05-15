import { Category } from './category.entity';
import { Provider } from '@nestjs/common';

export const categoryProviders: Provider[] = [
    {
        provide: Category,
        useValue: Category,
    }
];