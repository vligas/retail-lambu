import { TrHabladoresOfertasculminada } from './trHabladoresOfertasculminada.entity';
import { Provider } from '@nestjs/common';

export const trHabladoresOfertasculminadaProviders: Provider[] = [
    {
        provide: TrHabladoresOfertasculminada,
        useValue: TrHabladoresOfertasculminada,
    }
];