import { TrPendGrupos } from './trPendGrupos.entity';
import { Provider } from '@nestjs/common';

export const trPendGruposProviders: Provider[] = [
    {
        provide: TrPendGrupos,
        useValue: TrPendGrupos,
    }
];