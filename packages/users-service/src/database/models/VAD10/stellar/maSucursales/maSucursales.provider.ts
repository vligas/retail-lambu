import { MaSucursales } from './maSucursales.entity';
import { Provider } from '@nestjs/common';

export const maSucursalesProviders: Provider[] = [
    {
        provide: MaSucursales,
        useValue: MaSucursales,
    }
];