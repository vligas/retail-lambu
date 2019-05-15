import { MaImpresorasEtiquetas } from './maImpresorasEtiquetas.entity';
import { Provider } from '@nestjs/common';

export const maImpresorasEtiquetasProviders: Provider[] = [
    {
        provide: MaImpresorasEtiquetas,
        useValue: MaImpresorasEtiquetas,
    }
];