import { Injectable, ExecutionContext, HttpService } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// tslint:disable-next-line: variable-name
export const PermissionsGuard = (...permissions: string[]): any => {

    @Injectable()
    class Guard extends AuthGuard('jwt') {
        constructor(
            private httpService: HttpService
        ) {
            super();
            console.log('---');
            console.log('permission guard');
            
        }

        async canActivate(context: ExecutionContext): Promise<boolean> {
            console.log('can active');
            
            if (process.env.NODE_ENV === 'development') {
                return true;
            }
            return await this.invokeGuard();
        }

        async invokeGuard() {
            console.log('invoke');
            console.log(permissions);
            
            await this.httpService.get('http://localhost:3007/auth/can-activate').toPromise();
            console.log('return invoke:: ');
            
            return true;
        }


    }

    return Guard;
};
