import { MaRtfEsc } from './maRtfEsc.entity';
import { Provider } from '@nestjs/common';

export const maRtfEscProviders: Provider[] = [
    {
        provide: MaRtfEsc,
        useValue: MaRtfEsc,
    }
];