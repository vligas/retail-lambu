import { TrPendDenominacion } from './trPendDenominacion.entity';
import { Provider } from '@nestjs/common';

export const trPendDenominacionProviders: Provider[] = [
    {
        provide: TrPendDenominacion,
        useValue: TrPendDenominacion,
    }
];