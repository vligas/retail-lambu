import { TrPendienteProd } from './trPendienteProd.entity';
import { Provider } from '@nestjs/common';

export const trPendienteProdProviders: Provider[] = [
    {
        provide: TrPendienteProd,
        useValue: TrPendienteProd,
    }
];