import { EstrucReportControlesrtf } from './estrucReportControlesrtf.entity';
import { Provider } from '@nestjs/common';

export const estrucReportControlesrtfProviders: Provider[] = [
    {
        provide: EstrucReportControlesrtf,
        useValue: EstrucReportControlesrtf,
    }
];