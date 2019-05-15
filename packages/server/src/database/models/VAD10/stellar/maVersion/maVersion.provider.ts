import { MaVersion } from './maVersion.entity';
import { Provider } from '@nestjs/common';

export const maVersionProviders: Provider[] = [
    {
        provide: MaVersion,
        useValue: MaVersion,
    }
];