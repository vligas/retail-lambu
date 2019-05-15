import { MaAuditoriasTipos } from './maAuditoriasTipos.entity';
import { Provider } from '@nestjs/common';

export const maAuditoriasTiposProviders: Provider[] = [
    {
        provide: MaAuditoriasTipos,
        useValue: MaAuditoriasTipos,
    }
];