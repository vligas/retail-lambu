import { Provider } from '@nestjs/common';
import { CompetitorPrice } from './competitorPrice.entity';

export const competitorPriceProviders: Provider[] = [
    {
        provide: CompetitorPrice,
        useValue: CompetitorPrice,
    }
];