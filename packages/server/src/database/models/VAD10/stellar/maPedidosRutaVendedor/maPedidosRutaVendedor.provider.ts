import { MaPedidosRutaVendedor } from './maPedidosRutaVendedor.entity';
import { Provider } from '@nestjs/common';

export const maPedidosRutaVendedorProviders: Provider[] = [
    {
        provide: MaPedidosRutaVendedor,
        useValue: MaPedidosRutaVendedor,
    }
];