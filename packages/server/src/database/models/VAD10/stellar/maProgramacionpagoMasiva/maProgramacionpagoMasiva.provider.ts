import { MaProgramacionpagoMasiva } from './maProgramacionpagoMasiva.entity';
import { Provider } from '@nestjs/common';

export const maProgramacionpagoMasivaProviders: Provider[] = [
    {
        provide: MaProgramacionpagoMasiva,
        useValue: MaProgramacionpagoMasiva,
    }
];