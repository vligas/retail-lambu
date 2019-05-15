import { MaVentas } from './maVentas.entity';
import { Provider } from '@nestjs/common';

export const maVentasProviders: Provider[] = [
    {
        provide: MaVentas,
        useValue: MaVentas,
    }
];