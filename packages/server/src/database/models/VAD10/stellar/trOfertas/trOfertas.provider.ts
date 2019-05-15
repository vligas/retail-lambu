import { TrOfertas } from './trOfertas.entity';
import { Provider } from '@nestjs/common';

export const trOfertasProviders: Provider[] = [
    {
        provide: TrOfertas,
        useValue: TrOfertas,
    }
];