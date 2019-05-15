import { MaComprasUnidades } from './maComprasUnidades.entity';
import { Provider } from '@nestjs/common';

export const maComprasUnidadesProviders: Provider[] = [
    {
        provide: MaComprasUnidades,
        useValue: MaComprasUnidades,
    }
];