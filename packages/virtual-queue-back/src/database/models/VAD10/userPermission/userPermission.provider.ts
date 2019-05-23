import { UserPermission } from './userPermission.entity';
import { Provider } from '@nestjs/common';

export const userPermissionProviders: Provider[] = [
    {
        provide: UserPermission,
        useValue: UserPermission,
    }
];