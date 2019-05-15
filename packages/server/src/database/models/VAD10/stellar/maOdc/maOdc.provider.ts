import { MaOdc } from './maOdc.entity';
import { Provider } from '@nestjs/common';

export const maOdcProviders: Provider[] = [
    {
        provide: MaOdc,
        useValue: MaOdc,
    }
];