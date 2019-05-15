import { MaBienes } from './maBienes.entity';
import { Provider } from '@nestjs/common';

export const maBienesProviders: Provider[] = [
    {
        provide: MaBienes,
        useValue: MaBienes,
    }
];