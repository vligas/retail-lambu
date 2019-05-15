import { MaCxc } from './maCxc.entity';
import { Provider } from '@nestjs/common';

export const maCxcProviders: Provider[] = [
    {
        provide: MaCxc,
        useValue: MaCxc,
    }
];