import { MaFormatoBancos } from './maFormatoBancos.entity';
import { Provider } from '@nestjs/common';

export const maFormatoBancosProviders: Provider[] = [
    {
        provide: MaFormatoBancos,
        useValue: MaFormatoBancos,
    }
];