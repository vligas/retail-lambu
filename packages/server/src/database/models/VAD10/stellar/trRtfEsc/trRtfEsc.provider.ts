import { TrRtfEsc } from './trRtfEsc.entity';
import { Provider } from '@nestjs/common';

export const trRtfEscProviders: Provider[] = [
    {
        provide: TrRtfEsc,
        useValue: TrRtfEsc,
    }
];