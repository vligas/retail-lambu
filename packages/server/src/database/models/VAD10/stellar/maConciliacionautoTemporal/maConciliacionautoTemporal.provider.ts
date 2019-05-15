import { MaConciliacionautoTemporal } from './maConciliacionautoTemporal.entity';
import { Provider } from '@nestjs/common';

export const maConciliacionautoTemporalProviders: Provider[] = [
    {
        provide: MaConciliacionautoTemporal,
        useValue: MaConciliacionautoTemporal,
    }
];