import { TrPedidosRuta } from './trPedidosRuta.entity';
import { Provider } from '@nestjs/common';

export const trPedidosRutaProviders: Provider[] = [
    {
        provide: TrPedidosRuta,
        useValue: TrPedidosRuta,
    }
];