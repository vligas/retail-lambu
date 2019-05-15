import { TrImpresorasEtiquetas } from './trImpresorasEtiquetas.entity';
import { Provider } from '@nestjs/common';

export const trImpresorasEtiquetasProviders: Provider[] = [
    {
        provide: TrImpresorasEtiquetas,
        useValue: TrImpresorasEtiquetas,
    }
];