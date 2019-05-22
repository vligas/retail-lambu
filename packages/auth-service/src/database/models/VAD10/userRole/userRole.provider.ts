import { UserRole } from './userRole.entity';
import { Provider } from '@nestjs/common';

export const userRoleProviders: Provider[] = [
    {
        provide: UserRole,
        useValue: UserRole,
    }
];