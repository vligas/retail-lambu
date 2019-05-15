import { Sysdiagrams } from './sysdiagrams.entity';
import { Provider } from '@nestjs/common';

export const sysdiagramsProviders: Provider[] = [
    {
        provide: Sysdiagrams,
        useValue: Sysdiagrams,
    }
];