import { RolePermission } from './rolePermission.entity';
import { Provider } from '@nestjs/common';

export const rolePermissionProviders: Provider[] = [
    {
        provide: RolePermission,
        useValue: RolePermission,
    }
];