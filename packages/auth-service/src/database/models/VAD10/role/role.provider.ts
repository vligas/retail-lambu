import { Role } from './role.entity';
import { Provider } from '@nestjs/common';

export const roleProviders: Provider[] = [
    {
        provide: Role,
        useValue: Role,
    }
];