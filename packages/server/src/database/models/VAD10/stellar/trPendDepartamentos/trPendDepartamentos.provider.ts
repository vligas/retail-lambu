import { TrPendDepartamentos } from './trPendDepartamentos.entity';
import { Provider } from '@nestjs/common';

export const trPendDepartamentosProviders: Provider[] = [
    {
        provide: TrPendDepartamentos,
        useValue: TrPendDepartamentos,
    }
];