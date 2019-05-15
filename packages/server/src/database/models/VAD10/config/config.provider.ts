import { Provider } from '@nestjs/common';
import { Config } from './config.entity';

export const configProviders: Provider[] = [
    {
        provide: Config,
        useValue: Config,
    }
];