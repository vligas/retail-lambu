import { TrPendBancos } from './trPendBancos.entity';
import { Provider } from '@nestjs/common';

export const trPendBancosProviders: Provider[] = [
    {
        provide: TrPendBancos,
        useValue: TrPendBancos,
    }
];