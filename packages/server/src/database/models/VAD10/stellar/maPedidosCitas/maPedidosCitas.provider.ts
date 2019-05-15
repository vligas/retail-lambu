import { MaPedidosCitas } from './maPedidosCitas.entity';
import { Provider } from '@nestjs/common';

export const maPedidosCitasProviders: Provider[] = [
    {
        provide: MaPedidosCitas,
        useValue: MaPedidosCitas,
    }
];