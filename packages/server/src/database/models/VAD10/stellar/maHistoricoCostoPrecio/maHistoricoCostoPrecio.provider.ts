import { MaHistoricoCostoPrecio } from './maHistoricoCostoPrecio.entity';
import { Provider } from '@nestjs/common';

export const maHistoricoCostoPrecioProviders: Provider[] = [
    {
        provide: MaHistoricoCostoPrecio,
        useValue: MaHistoricoCostoPrecio,
    }
];