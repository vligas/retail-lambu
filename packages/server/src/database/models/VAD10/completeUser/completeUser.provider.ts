import { Provider } from '@nestjs/common';
import { CompleteUser } from './completeUser.entity';

export const completeUserProviders: Provider[] = [
    {
        provide: CompleteUser,
        useValue: CompleteUser,
    }
];