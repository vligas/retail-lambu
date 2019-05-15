import { MaPlantillaEscala } from './maPlantillaEscala.entity';
import { Provider } from '@nestjs/common';

export const maPlantillaEscalaProviders: Provider[] = [
    {
        provide: MaPlantillaEscala,
        useValue: MaPlantillaEscala,
    }
];