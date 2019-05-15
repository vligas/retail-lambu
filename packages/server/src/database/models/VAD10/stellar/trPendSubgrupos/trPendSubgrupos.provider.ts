import { TrPendSubgrupos } from './trPendSubgrupos.entity';
import { Provider } from '@nestjs/common';

export const trPendSubgruposProviders: Provider[] = [
    {
        provide: TrPendSubgrupos,
        useValue: TrPendSubgrupos,
    }
];