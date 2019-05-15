import { MaOdcAutomaticas } from './maOdcAutomaticas.entity';
import { Provider } from '@nestjs/common';

export const maOdcAutomaticasProviders: Provider[] = [
    {
        provide: MaOdcAutomaticas,
        useValue: MaOdcAutomaticas,
    }
];