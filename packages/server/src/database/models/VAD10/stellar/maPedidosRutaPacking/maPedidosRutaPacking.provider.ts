import { MaPedidosRutaPacking } from './maPedidosRutaPacking.entity';
import { Provider } from '@nestjs/common';

export const maPedidosRutaPackingProviders: Provider[] = [
    {
        provide: MaPedidosRutaPacking,
        useValue: MaPedidosRutaPacking,
    }
];