import { MaCxpDetpagTmp } from './maCxpDetpagTmp.entity';
import { Provider } from '@nestjs/common';

export const maCxpDetpagTmpProviders: Provider[] = [
    {
        provide: MaCxpDetpagTmp,
        useValue: MaCxpDetpagTmp,
    }
];