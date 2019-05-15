import { MaDispositivos } from './maDispositivos.entity';
import { Provider } from '@nestjs/common';

export const maDispositivosProviders: Provider[] = [
    {
        provide: MaDispositivos,
        useValue: MaDispositivos,
    }
];