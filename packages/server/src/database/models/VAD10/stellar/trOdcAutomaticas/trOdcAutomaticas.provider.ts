import { TrOdcAutomaticas } from './trOdcAutomaticas.entity';
import { Provider } from '@nestjs/common';

export const trOdcAutomaticasProviders: Provider[] = [
    {
        provide: TrOdcAutomaticas,
        useValue: TrOdcAutomaticas,
    }
];