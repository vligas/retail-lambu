import { MaComprasRetenciones } from './maComprasRetenciones.entity';
import { Provider } from '@nestjs/common';

export const maComprasRetencionesProviders: Provider[] = [
    {
        provide: MaComprasRetenciones,
        useValue: MaComprasRetenciones,
    }
];