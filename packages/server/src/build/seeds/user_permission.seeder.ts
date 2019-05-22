import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { User, Permission, Role } from 'src/database';
// /home/luigi/use/lambu/retail/retail-mono/packages/server/src/database/models/VAD10/user


export default class UserPermissionSeeder implements SeedInterface {
    constructor(
        @Inject(User) private userRepository: typeof User,
        @Inject(Permission) private permissionRepository: typeof Permission,
        @Inject(Role) private roleRepository: typeof Role,
    ) { }

    async run() {
        const users = await this.userRepository.findAll();
        const allPermissions = await this.permissionRepository.findAll();
        const rolePermissions = await this.roleRepository.findAll();

        for (const user of users) {
            if(user.login_name=== 'lgonzalez'){
                await user.$set('roles', [...rolePermissions]);
            }
            await user.$set('permissions', [allPermissions[0], allPermissions[1]]);
        }
    }
}