import { MaCxpProg } from './maCxpProg.entity';
import { Provider } from '@nestjs/common';

export const maCxpProgProviders: Provider[] = [
    {
        provide: MaCxpProg,
        useValue: MaCxpProg,
    }
];