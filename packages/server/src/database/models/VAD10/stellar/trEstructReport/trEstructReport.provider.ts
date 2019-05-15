import { TrEstructReport } from './trEstructReport.entity';
import { Provider } from '@nestjs/common';

export const trEstructReportProviders: Provider[] = [
    {
        provide: TrEstructReport,
        useValue: TrEstructReport,
    }
];