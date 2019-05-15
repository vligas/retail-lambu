import { MaImpresoraEtiqueta } from './maImpresoraEtiqueta.entity';
import { Provider } from '@nestjs/common';

export const maImpresoraEtiquetaProviders: Provider[] = [
    {
        provide: MaImpresoraEtiqueta,
        useValue: MaImpresoraEtiqueta,
    }
];