import { Injectable, ExecutionContext, Logger } from '@nestjs/common';
import { UserService } from 'src/features/userControl/user.service';
import { RoleService } from '../role.service';
import { AuthGuard } from '@nestjs/passport';

export const ValidateGuard = (): any => {

    @Injectable()
    class Guard extends AuthGuard('jwt') {
        constructor(private userService: UserService, private roleService: RoleService) {
            super();
        }

        async canActivate(context: ExecutionContext): Promise<boolean> {
            return !!await super.canActivate(context);
        }

    }

    return Guard;
};


