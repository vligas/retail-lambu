import { MaVentasRetenciones } from './maVentasRetenciones.entity';
import { Provider } from '@nestjs/common';

export const maVentasRetencionesProviders: Provider[] = [
    {
        provide: MaVentasRetenciones,
        useValue: MaVentasRetenciones,
    }
];