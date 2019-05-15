import { MaOfertas } from './maOfertas.entity';
import { Provider } from '@nestjs/common';

export const maOfertasProviders: Provider[] = [
    {
        provide: MaOfertas,
        useValue: MaOfertas,
    }
];