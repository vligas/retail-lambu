import { MaInvFisico } from './maInvFisico.entity';
import { Provider } from '@nestjs/common';

export const maInvFisicoProviders: Provider[] = [
    {
        provide: MaInvFisico,
        useValue: MaInvFisico,
    }
];