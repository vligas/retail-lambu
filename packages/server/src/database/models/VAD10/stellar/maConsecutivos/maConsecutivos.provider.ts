import { MaConsecutivos } from './maConsecutivos.entity';
import { Provider } from '@nestjs/common';

export const maConsecutivosProviders: Provider[] = [
    {
        provide: MaConsecutivos,
        useValue: MaConsecutivos,
    }
];