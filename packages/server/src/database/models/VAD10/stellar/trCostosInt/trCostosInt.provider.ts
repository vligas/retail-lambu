import { TrCostosInt } from './trCostosInt.entity';
import { Provider } from '@nestjs/common';

export const trCostosIntProviders: Provider[] = [
    {
        provide: TrCostosInt,
        useValue: TrCostosInt,
    }
];