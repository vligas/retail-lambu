import { Competitor } from './competitor.entity';
import { Provider } from '@nestjs/common';

export const competitorProviders: Provider[] = [
    {
        provide: Competitor,
        useValue: Competitor,
    }
];