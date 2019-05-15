import { TrPendRetenciones } from './trPendRetenciones.entity';
import { Provider } from '@nestjs/common';

export const trPendRetencionesProviders: Provider[] = [
    {
        provide: TrPendRetenciones,
        useValue: TrPendRetenciones,
    }
];