import { MaAuxGrupo } from './maAuxGrupo.entity';
import { Provider } from '@nestjs/common';

export const maAuxGrupoProviders: Provider[] = [
    {
        provide: MaAuxGrupo,
        useValue: MaAuxGrupo,
    }
];