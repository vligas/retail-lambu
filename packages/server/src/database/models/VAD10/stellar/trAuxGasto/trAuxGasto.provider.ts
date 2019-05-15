import { TrAuxGasto } from './trAuxGasto.entity';
import { Provider } from '@nestjs/common';

export const trAuxGastoProviders: Provider[] = [
    {
        provide: TrAuxGasto,
        useValue: TrAuxGasto,
    }
];