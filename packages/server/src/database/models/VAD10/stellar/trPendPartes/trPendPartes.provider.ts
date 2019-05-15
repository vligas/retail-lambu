import { TrPendPartes } from './trPendPartes.entity';
import { Provider } from '@nestjs/common';

export const trPendPartesProviders: Provider[] = [
    {
        provide: TrPendPartes,
        useValue: TrPendPartes,
    }
];