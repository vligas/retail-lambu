import { TrInvFisicoPdt } from './trInvFisicoPdt.entity';
import { Provider } from '@nestjs/common';

export const trInvFisicoPdtProviders: Provider[] = [
    {
        provide: TrInvFisicoPdt,
        useValue: TrInvFisicoPdt,
    }
];