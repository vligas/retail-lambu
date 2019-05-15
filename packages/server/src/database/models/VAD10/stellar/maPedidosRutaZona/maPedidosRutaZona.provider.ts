import { MaPedidosRutaZona } from './maPedidosRutaZona.entity';
import { Provider } from '@nestjs/common';

export const maPedidosRutaZonaProviders: Provider[] = [
    {
        provide: MaPedidosRutaZona,
        useValue: MaPedidosRutaZona,
    }
];