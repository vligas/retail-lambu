import { MaUnidades } from './maUnidades.entity';
import { Provider } from '@nestjs/common';

export const maUnidadesProviders: Provider[] = [
    {
        provide: MaUnidades,
        useValue: MaUnidades,
    }
];