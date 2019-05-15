import { TmpProgramacionpagoMasiva } from './tmpProgramacionpagoMasiva.entity';
import { Provider } from '@nestjs/common';

export const tmpProgramacionpagoMasivaProviders: Provider[] = [
    {
        provide: TmpProgramacionpagoMasiva,
        useValue: TmpProgramacionpagoMasiva,
    }
];