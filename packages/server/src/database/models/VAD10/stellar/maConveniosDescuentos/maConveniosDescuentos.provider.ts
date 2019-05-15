import { MaConveniosDescuentos } from './maConveniosDescuentos.entity';
import { Provider } from '@nestjs/common';

export const maConveniosDescuentosProviders: Provider[] = [
    {
        provide: MaConveniosDescuentos,
        useValue: MaConveniosDescuentos,
    }
];