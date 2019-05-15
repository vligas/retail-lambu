import { MaPlantillas } from './maPlantillas.entity';
import { Provider } from '@nestjs/common';

export const maPlantillasProviders: Provider[] = [
    {
        provide: MaPlantillas,
        useValue: MaPlantillas,
    }
];