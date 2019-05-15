import { MaCxpDetpag } from './maCxpDetpag.entity';
import { Provider } from '@nestjs/common';

export const maCxpDetpagProviders: Provider[] = [
    {
        provide: MaCxpDetpag,
        useValue: MaCxpDetpag,
    }
];