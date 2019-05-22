/* import { Injectable, ExecutionContext, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/features/userControl/user.service';
import { RoleService } from 'src/features/auth/role.service';

// tslint:disable-next-line: variable-name

export const ValidateGuard = (...permissions: string[]): any => {

    @Injectable()
    class Guard extends AuthGuard('jwt') {
        constructor(private userService: UserService, private roleService: RoleService) {
            super();
            console.log('guard service');
            
            this.roleService.allPermissions().then(dbPermissions => {
                permissions.forEach(p => {
                    if (!dbPermissions.find(permission => permission.name === p)) {
                        Logger.error(`[PermissionGuard] The permission '${p}' is not present in the database`);
                    }
                });
            });
        }

        async canActivate(context: ExecutionContext): Promise<boolean> {
            return await super.canActivate(context) && await this.havePermission(context);
        }

        async havePermission(context: ExecutionContext) {
            if (permissions.length === 0) {
                return true;
            }
            const req = context.switchToHttp().getRequest();
            const userPermissions = await this.userService.getPermissions(req.user.login_name);
            return permissions.every(p => userPermissions.some(up => up.name === p));
        }

    }

    return Guard;
};
 */