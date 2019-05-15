import { ConfMenuUser } from './confMenuUser.entity';
import { Provider } from '@nestjs/common';

export const confMenuUserProviders: Provider[] = [
    {
        provide: ConfMenuUser,
        useValue: ConfMenuUser,
    }
];