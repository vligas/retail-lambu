import { Provider } from '@nestjs/common';
import { Configuration } from './configuration.entity';

export const configurationProviders: Provider[] = [
    {
        provide: Configuration,
        useValue: Configuration,
    },
];
