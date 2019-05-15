import { ExOdc } from './exOdc.entity';
import { Provider } from '@nestjs/common';

export const exOdcProviders: Provider[] = [
    {
        provide: ExOdc,
        useValue: ExOdc,
    }
];