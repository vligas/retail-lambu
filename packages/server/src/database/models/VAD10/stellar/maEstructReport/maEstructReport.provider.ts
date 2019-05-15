import { MaEstructReport } from './maEstructReport.entity';
import { Provider } from '@nestjs/common';

export const maEstructReportProviders: Provider[] = [
    {
        provide: MaEstructReport,
        useValue: MaEstructReport,
    }
];