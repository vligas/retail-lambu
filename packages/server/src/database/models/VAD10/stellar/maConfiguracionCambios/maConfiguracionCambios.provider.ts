import { MaConfiguracionCambios } from './maConfiguracionCambios.entity';
import { Provider } from '@nestjs/common';

export const maConfiguracionCambiosProviders: Provider[] = [
    {
        provide: MaConfiguracionCambios,
        useValue: MaConfiguracionCambios,
    }
];