import { User } from './user.entity';
import { Provider } from '@nestjs/common';

export const userProviders: Provider[] = [
    {
        provide: User,
        useValue: User,
    }
];