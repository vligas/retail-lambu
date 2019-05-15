import { MaPedidosRutaRuta } from './maPedidosRutaRuta.entity';
import { Provider } from '@nestjs/common';

export const maPedidosRutaRutaProviders: Provider[] = [
    {
        provide: MaPedidosRutaRuta,
        useValue: MaPedidosRutaRuta,
    }
];