import { MaCxp } from './maCxp.entity';
import { Provider } from '@nestjs/common';

export const maCxpProviders: Provider[] = [
    {
        provide: MaCxp,
        useValue: MaCxp,
    }
];