import { Provider } from '@nestjs/common';
import { Config } from './config.entity';

export const configurationProviders: Provider[] = [
    {
        provide: Config,
        useValue: Config,
    },
];
