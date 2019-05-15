import { TrOdcDescuentos } from './trOdcDescuentos.entity';
import { Provider } from '@nestjs/common';

export const trOdcDescuentosProviders: Provider[] = [
    {
        provide: TrOdcDescuentos,
        useValue: TrOdcDescuentos,
    }
];