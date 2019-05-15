import { MaTransporte } from './maTransporte.entity';
import { Provider } from '@nestjs/common';

export const maTransporteProviders: Provider[] = [
    {
        provide: MaTransporte,
        useValue: MaTransporte,
    }
];