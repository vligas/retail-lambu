import { TrOdc } from './trOdc.entity';
import { Provider } from '@nestjs/common';

export const trOdcProviders: Provider[] = [
    {
        provide: TrOdc,
        useValue: TrOdc,
    }
];