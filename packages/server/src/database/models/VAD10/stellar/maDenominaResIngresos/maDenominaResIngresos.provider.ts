import { MaDenominaResIngresos } from './maDenominaResIngresos.entity';
import { Provider } from '@nestjs/common';

export const maDenominaResIngresosProviders: Provider[] = [
    {
        provide: MaDenominaResIngresos,
        useValue: MaDenominaResIngresos,
    }
];