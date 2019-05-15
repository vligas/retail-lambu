import { EstrucReport } from './estrucReport.entity';
import { Provider } from '@nestjs/common';

export const estrucReportProviders: Provider[] = [
    {
        provide: EstrucReport,
        useValue: EstrucReport,
    }
];