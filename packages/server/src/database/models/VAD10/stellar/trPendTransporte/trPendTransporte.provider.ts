import { TrPendTransporte } from './trPendTransporte.entity';
import { Provider } from '@nestjs/common';

export const trPendTransporteProviders: Provider[] = [
    {
        provide: TrPendTransporte,
        useValue: TrPendTransporte,
    }
];