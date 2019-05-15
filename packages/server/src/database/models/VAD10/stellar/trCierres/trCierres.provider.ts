import { TrCierres } from './trCierres.entity';
import { Provider } from '@nestjs/common';

export const trCierresProviders: Provider[] = [
    {
        provide: TrCierres,
        useValue: TrCierres,
    }
];