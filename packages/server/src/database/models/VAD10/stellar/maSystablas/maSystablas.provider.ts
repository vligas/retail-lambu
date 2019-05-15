import { MaSystablas } from './maSystablas.entity';
import { Provider } from '@nestjs/common';

export const maSystablasProviders: Provider[] = [
    {
        provide: MaSystablas,
        useValue: MaSystablas,
    }
];