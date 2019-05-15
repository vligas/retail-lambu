import { TrInvFisico } from './trInvFisico.entity';
import { Provider } from '@nestjs/common';

export const trInvFisicoProviders: Provider[] = [
    {
        provide: TrInvFisico,
        useValue: TrInvFisico,
    }
];