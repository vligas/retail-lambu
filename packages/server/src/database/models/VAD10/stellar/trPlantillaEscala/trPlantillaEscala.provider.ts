import { TrPlantillaEscala } from './trPlantillaEscala.entity';
import { Provider } from '@nestjs/common';

export const trPlantillaEscalaProviders: Provider[] = [
    {
        provide: TrPlantillaEscala,
        useValue: TrPlantillaEscala,
    }
];