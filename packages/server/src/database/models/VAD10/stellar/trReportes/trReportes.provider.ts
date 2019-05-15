import { TrReportes } from './trReportes.entity';
import { Provider } from '@nestjs/common';

export const trReportesProviders: Provider[] = [
    {
        provide: TrReportes,
        useValue: TrReportes,
    }
];