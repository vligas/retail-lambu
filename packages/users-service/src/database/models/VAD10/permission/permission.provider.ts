import { Permission } from './permission.entity';
import { Provider } from '@nestjs/common';

export const permissionProviders: Provider[] = [
    {
        provide: Permission,
        useValue: Permission,
    }
];