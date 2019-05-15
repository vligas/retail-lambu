import { MaAuditorias } from './maAuditorias.entity';
import { Provider } from '@nestjs/common';

export const maAuditoriasProviders: Provider[] = [
    {
        provide: MaAuditorias,
        useValue: MaAuditorias,
    }
];