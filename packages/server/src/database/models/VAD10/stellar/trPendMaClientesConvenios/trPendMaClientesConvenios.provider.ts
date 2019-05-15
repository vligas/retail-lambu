import { TrPendMaClientesConvenios } from './trPendMaClientesConvenios.entity';
import { Provider } from '@nestjs/common';

export const trPendMaClientesConveniosProviders: Provider[] = [
    {
        provide: TrPendMaClientesConvenios,
        useValue: TrPendMaClientesConvenios,
    }
];