import { TrProgramacionpagoMasiva } from './trProgramacionpagoMasiva.entity';
import { Provider } from '@nestjs/common';

export const trProgramacionpagoMasivaProviders: Provider[] = [
    {
        provide: TrProgramacionpagoMasiva,
        useValue: TrProgramacionpagoMasiva,
    }
];