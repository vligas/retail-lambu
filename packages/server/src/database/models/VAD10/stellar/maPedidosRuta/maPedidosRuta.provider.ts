import { MaPedidosRuta } from './maPedidosRuta.entity';
import { Provider } from '@nestjs/common';

export const maPedidosRutaProviders: Provider[] = [
    {
        provide: MaPedidosRuta,
        useValue: MaPedidosRuta,
    }
];