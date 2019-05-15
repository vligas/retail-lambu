import { MaConfiguracionMail } from './maConfiguracionMail.entity';
import { Provider } from '@nestjs/common';

export const maConfiguracionMailProviders: Provider[] = [
    {
        provide: MaConfiguracionMail,
        useValue: MaConfiguracionMail,
    }
];