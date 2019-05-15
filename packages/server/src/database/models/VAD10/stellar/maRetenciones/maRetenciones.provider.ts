import { MaRetenciones } from './maRetenciones.entity';
import { Provider } from '@nestjs/common';

export const maRetencionesProviders: Provider[] = [
    {
        provide: MaRetenciones,
        useValue: MaRetenciones,
    }
];