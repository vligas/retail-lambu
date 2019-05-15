import { MaCorrelativoRetencion } from './maCorrelativoRetencion.entity';
import { Provider } from '@nestjs/common';

export const maCorrelativoRetencionProviders: Provider[] = [
    {
        provide: MaCorrelativoRetencion,
        useValue: MaCorrelativoRetencion,
    }
];