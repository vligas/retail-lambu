import { MaReglasdenegocioModulos } from './maReglasdenegocioModulos.entity';
import { Provider } from '@nestjs/common';

export const maReglasdenegocioModulosProviders: Provider[] = [
    {
        provide: MaReglasdenegocioModulos,
        useValue: MaReglasdenegocioModulos,
    }
];