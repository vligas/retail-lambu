import { MaGrupos } from './maGrupos.entity';
import { Provider } from '@nestjs/common';

export const maGruposProviders: Provider[] = [
    {
        provide: MaGrupos,
        useValue: MaGrupos,
    }
];