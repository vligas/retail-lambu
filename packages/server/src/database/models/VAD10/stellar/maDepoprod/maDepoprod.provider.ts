import { MaDepoprod } from './maDepoprod.entity';
import { Provider } from '@nestjs/common';

export const maDepoprodProviders: Provider[] = [
    {
        provide: MaDepoprod,
        useValue: MaDepoprod,
    }
];