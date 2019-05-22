import { Injectable, ExecutionContext, HttpService } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { logger } from '../utils';
import { HttpCommunicationService } from '../service-communication';
import { AUTH_SERVICE_NAME } from '../utils/constants';

// tslint:disable-next-line: variable-name
export const PermissionsGuard = (...permissions: string[]): any => {

    @Injectable()
    class Guard extends AuthGuard('jwt') {
        constructor(
            private httpService: HttpService,
            private http: HttpCommunicationService
        ) {
            super();
            console.log('---');
            console.log('permission guard');
            
        }

        async canActivate(context: ExecutionContext): Promise<boolean> {
            if (process.env.NODE_ENV === 'development') {
                return true;
            }
            return await this.invokeGuard();
        }

        async invokeGuard() {
            try {
                const userPermissions = await this.http.call(AUTH_SERVICE_NAME, {
                    method: 'GET',
                    endpoint: 'auth/can-activate',
                    body: {
                        username: 'lgonzalez',
                        password: '123'
                    },
                });
                console.log('userPermissions: ', userPermissions);
                
                if (permissions.length === 0) {
                    return true;
                }
                return permissions.every(p => userPermissions.data.some(up => up.name === p));
                
            } catch (err) {
                logger.error(err);
                return false;
            }
        }
    }

    return Guard;
};
