import { MaPedidosRutaAutorizaciones } from './maPedidosRutaAutorizaciones.entity';
import { Provider } from '@nestjs/common';

export const maPedidosRutaAutorizacionesProviders: Provider[] = [
    {
        provide: MaPedidosRutaAutorizaciones,
        useValue: MaPedidosRutaAutorizaciones,
    }
];