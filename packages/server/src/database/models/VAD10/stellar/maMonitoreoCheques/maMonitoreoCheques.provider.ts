import { MaMonitoreoCheques } from './maMonitoreoCheques.entity';
import { Provider } from '@nestjs/common';

export const maMonitoreoChequesProviders: Provider[] = [
    {
        provide: MaMonitoreoCheques,
        useValue: MaMonitoreoCheques,
    }
];