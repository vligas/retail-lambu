import { TrVentas } from './trVentas.entity';
import { Provider } from '@nestjs/common';

export const trVentasProviders: Provider[] = [
    {
        provide: TrVentas,
        useValue: TrVentas,
    }
];