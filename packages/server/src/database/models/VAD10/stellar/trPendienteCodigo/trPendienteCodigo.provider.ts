import { TrPendienteCodigo } from './trPendienteCodigo.entity';
import { Provider } from '@nestjs/common';

export const trPendienteCodigoProviders: Provider[] = [
    {
        provide: TrPendienteCodigo,
        useValue: TrPendienteCodigo,
    }
];