import { RouteUser } from './routeUser.entity';
import { Provider } from '@nestjs/common';

export const routeUserProviders: Provider[] = [
    {
        provide: RouteUser,
        useValue: RouteUser,
    }
];