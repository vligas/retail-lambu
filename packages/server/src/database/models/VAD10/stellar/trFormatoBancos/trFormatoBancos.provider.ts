import { TrFormatoBancos } from './trFormatoBancos.entity';
import { Provider } from '@nestjs/common';

export const trFormatoBancosProviders: Provider[] = [
    {
        provide: TrFormatoBancos,
        useValue: TrFormatoBancos,
    }
];