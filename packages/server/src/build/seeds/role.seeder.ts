import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Role } from 'src/database/models/VAD10/role/role.entity';
import { Permission } from 'src/database/models/VAD10/permission/permission.entity';

export default class RoleSeeder implements SeedInterface {
    constructor(
        @Inject(Role) private roleRepository: typeof Role,
        @Inject(Permission) private permissionRepository: typeof Permission
    ) { }

    permissions: Permission[];

    private getPermission(name: string) {
        return this.permissions.find(p => p.name === name);
    }

    private async saveRole(role: Partial<Role>, permissions: Permission[]) {
        const dbRole = await this.roleRepository.create(role);
        await (dbRole as any).setPermissions(permissions);
    }

    async run() {
        this.permissions = await this.permissionRepository.findAll();

        const adminRole: Partial<Role> = {
            name: 'Administrador',
            description: 'Hay un camino.'
        };
        const adminPermissions: Permission[] = this.permissions;
        await this.saveRole(adminRole, adminPermissions);

        const managerRole: Partial<Role> = {
            name: 'Gerente',
            description: 'Chavez te lo juro mi voto es pa Maduro'
        };
        const managerPermissions: Permission[] = [
            this.getPermission('can-update-products'),
            this.getPermission('can-read-gap')
        ];
        await this.saveRole(managerRole, managerPermissions);

        

    }
}