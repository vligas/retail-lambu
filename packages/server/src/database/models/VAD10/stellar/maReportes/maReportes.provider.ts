import { MaReportes } from './maReportes.entity';
import { Provider } from '@nestjs/common';

export const maReportesProviders: Provider[] = [
    {
        provide: MaReportes,
        useValue: MaReportes,
    }
];