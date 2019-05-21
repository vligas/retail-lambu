import { Injectable, CanActivate, ExecutionContext, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

// tslint:disable-next-line: variable-name
export const PermissionsGuard = (...permissions: string[]): any => {

    @Injectable()
    class Guard extends AuthGuard('jwt') {
        constructor(
            private httpService: HttpService
        ) {
            super();
        }

        async canActivate(context: ExecutionContext): Promise<boolean> {
            console.log('///////////////////////process.env.NODE_ENV');
            console.log(process.env.NODE_ENV);
            
            // if (config.get("NODE_ENV") === 'development') {
            //     return true;
            // }
             this.httpService.get('http://localhost:3007/auth/canActivate').subscribe( p =>{
                 console.log('holaaaaaaaa');
                 console.log(p);
             });
             return true
        }


    }

    return Guard;
};
