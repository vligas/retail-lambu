import { TrPendSucursales } from './trPendSucursales.entity';
import { Provider } from '@nestjs/common';

export const trPendSucursalesProviders: Provider[] = [
    {
        provide: TrPendSucursales,
        useValue: TrPendSucursales,
    }
];