import { MaCostos } from './maCostos.entity';
import { Provider } from '@nestjs/common';

export const maCostosProviders: Provider[] = [
    {
        provide: MaCostos,
        useValue: MaCostos,
    }
];