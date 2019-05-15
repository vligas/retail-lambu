import { MaConceptos } from './maConceptos.entity';
import { Provider } from '@nestjs/common';

export const maConceptosProviders: Provider[] = [
    {
        provide: MaConceptos,
        useValue: MaConceptos,
    }
];