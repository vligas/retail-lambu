import { MaPartes } from './maPartes.entity';
import { Provider } from '@nestjs/common';

export const maPartesProviders: Provider[] = [
    {
        provide: MaPartes,
        useValue: MaPartes,
    }
];