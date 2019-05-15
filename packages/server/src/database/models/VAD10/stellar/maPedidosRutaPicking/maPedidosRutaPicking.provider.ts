import { MaPedidosRutaPicking } from './maPedidosRutaPicking.entity';
import { Provider } from '@nestjs/common';

export const maPedidosRutaPickingProviders: Provider[] = [
    {
        provide: MaPedidosRutaPicking,
        useValue: MaPedidosRutaPicking,
    }
];