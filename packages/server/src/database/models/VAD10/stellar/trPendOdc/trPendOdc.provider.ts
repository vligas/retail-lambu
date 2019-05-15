import { TrPendOdc } from './trPendOdc.entity';
import { Provider } from '@nestjs/common';

export const trPendOdcProviders: Provider[] = [
    {
        provide: TrPendOdc,
        useValue: TrPendOdc,
    }
];