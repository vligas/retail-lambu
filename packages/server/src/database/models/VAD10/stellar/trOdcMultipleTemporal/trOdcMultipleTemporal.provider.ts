import { TrOdcMultipleTemporal } from './trOdcMultipleTemporal.entity';
import { Provider } from '@nestjs/common';

export const trOdcMultipleTemporalProviders: Provider[] = [
    {
        provide: TrOdcMultipleTemporal,
        useValue: TrOdcMultipleTemporal,
    }
];