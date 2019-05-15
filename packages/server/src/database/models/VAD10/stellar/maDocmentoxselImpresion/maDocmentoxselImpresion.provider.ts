import { MaDocmentoxselImpresion } from './maDocmentoxselImpresion.entity';
import { Provider } from '@nestjs/common';

export const maDocmentoxselImpresionProviders: Provider[] = [
    {
        provide: MaDocmentoxselImpresion,
        useValue: MaDocmentoxselImpresion,
    }
];