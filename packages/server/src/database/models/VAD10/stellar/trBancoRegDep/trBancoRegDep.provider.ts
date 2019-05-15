import { TrBancoRegDep } from './trBancoRegDep.entity';
import { Provider } from '@nestjs/common';

export const trBancoRegDepProviders: Provider[] = [
    {
        provide: TrBancoRegDep,
        useValue: TrBancoRegDep,
    }
];