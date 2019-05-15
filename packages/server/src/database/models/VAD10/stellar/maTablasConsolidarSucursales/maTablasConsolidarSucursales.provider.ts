import { MaTablasConsolidarSucursales } from './maTablasConsolidarSucursales.entity';
import { Provider } from '@nestjs/common';

export const maTablasConsolidarSucursalesProviders: Provider[] = [
    {
        provide: MaTablasConsolidarSucursales,
        useValue: MaTablasConsolidarSucursales,
    }
];