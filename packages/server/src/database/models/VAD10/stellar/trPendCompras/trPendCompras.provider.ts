import { TrPendCompras } from './trPendCompras.entity';
import { Provider } from '@nestjs/common';

export const trPendComprasProviders: Provider[] = [
    {
        provide: TrPendCompras,
        useValue: TrPendCompras,
    }
];