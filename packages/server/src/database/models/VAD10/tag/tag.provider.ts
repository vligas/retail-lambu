import { Tag } from './tag.entity';
import { Provider } from '@nestjs/common';

export const tagProviders: Provider[] = [
    {
        provide: Tag,
        useValue: Tag,
    }
];