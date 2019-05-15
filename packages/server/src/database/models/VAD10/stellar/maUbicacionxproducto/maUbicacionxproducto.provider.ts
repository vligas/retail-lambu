import { MaUbicacionxproducto } from './maUbicacionxproducto.entity';
import { Provider } from '@nestjs/common';

export const maUbicacionxproductoProviders: Provider[] = [
    {
        provide: MaUbicacionxproducto,
        useValue: MaUbicacionxproducto,
    }
];