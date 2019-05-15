import { MaCompetidores } from './maCompetidores.entity';
import { Provider } from '@nestjs/common';

export const maCompetidoresProviders: Provider[] = [
    {
        provide: MaCompetidores,
        useValue: MaCompetidores,
    }
];