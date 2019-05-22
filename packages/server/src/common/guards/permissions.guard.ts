import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/features/userControl/user.service';
import { logger } from '../services/logger.service';
import { RoleService } from 'src/features/auth/role.service';
import { config } from 'src/config/config.service';

// tslint:disable-next-line: variable-name
export const PermissionsGuard = (...permissions: string[]): any => {

    @Injectable()
    class Guard extends AuthGuard('jwt') {
        constructor(private userService: UserService, private roleService: RoleService) {
            super();
            this.roleService.allPermissions().then(dbPermissions => {
                permissions.forEach(p => {
                    if (!dbPermissions.find(permission => permission.name === p)) {
                        logger.error(`[PermissionGuard] The permission '${p}' is not present in the database`);
                    }
                });
            });
        }

        async canActivate(context: ExecutionContext): Promise<boolean> {
            if (config.get("NODE_ENV") === 'development') {
                return true;
            }
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
