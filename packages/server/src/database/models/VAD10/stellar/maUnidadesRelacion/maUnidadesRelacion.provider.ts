import { MaUnidadesRelacion } from './maUnidadesRelacion.entity';
import { Provider } from '@nestjs/common';

export const maUnidadesRelacionProviders: Provider[] = [
    {
        provide: MaUnidadesRelacion,
        useValue: MaUnidadesRelacion,
    }
];