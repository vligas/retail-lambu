import { MaInventarioReporteTmp } from './maInventarioReporteTmp.entity';
import { Provider } from '@nestjs/common';

export const maInventarioReporteTmpProviders: Provider[] = [
    {
        provide: MaInventarioReporteTmp,
        useValue: MaInventarioReporteTmp,
    }
];