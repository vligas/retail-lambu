import { TrPendMonedas } from './trPendMonedas.entity';
import { Provider } from '@nestjs/common';

export const trPendMonedasProviders: Provider[] = [
    {
        provide: TrPendMonedas,
        useValue: TrPendMonedas,
    }
];