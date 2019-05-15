import { MaUbicacionxcategoria } from './maUbicacionxcategoria.entity';
import { Provider } from '@nestjs/common';

export const maUbicacionxcategoriaProviders: Provider[] = [
    {
        provide: MaUbicacionxcategoria,
        useValue: MaUbicacionxcategoria,
    }
];