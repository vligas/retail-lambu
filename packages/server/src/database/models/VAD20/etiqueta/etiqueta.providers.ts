import { Etiqueta } from './etiqueta.entity';
import { Provider } from '@nestjs/common';

export const maEtiquetasProviders: Provider[] = [
    {
        provide: Etiqueta,
        useValue: Etiqueta,
    }
];