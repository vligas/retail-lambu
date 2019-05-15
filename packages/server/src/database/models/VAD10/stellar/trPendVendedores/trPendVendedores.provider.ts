import { TrPendVendedores } from './trPendVendedores.entity';
import { Provider } from '@nestjs/common';

export const trPendVendedoresProviders: Provider[] = [
    {
        provide: TrPendVendedores,
        useValue: TrPendVendedores,
    }
];