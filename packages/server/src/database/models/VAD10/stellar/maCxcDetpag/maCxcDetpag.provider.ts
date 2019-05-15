import { MaCxcDetpag } from './maCxcDetpag.entity';
import { Provider } from '@nestjs/common';

export const maCxcDetpagProviders: Provider[] = [
    {
        provide: MaCxcDetpag,
        useValue: MaCxcDetpag,
    }
];