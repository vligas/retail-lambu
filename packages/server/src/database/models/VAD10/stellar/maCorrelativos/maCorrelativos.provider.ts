import { MaCorrelativos } from './maCorrelativos.entity';
import { Provider } from '@nestjs/common';

export const maCorrelativosProviders: Provider[] = [
    {
        provide: MaCorrelativos,
        useValue: MaCorrelativos,
    }
];