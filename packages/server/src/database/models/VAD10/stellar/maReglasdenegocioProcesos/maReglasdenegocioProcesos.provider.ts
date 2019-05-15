import { MaReglasdenegocioProcesos } from './maReglasdenegocioProcesos.entity';
import { Provider } from '@nestjs/common';

export const maReglasdenegocioProcesosProviders: Provider[] = [
    {
        provide: MaReglasdenegocioProcesos,
        useValue: MaReglasdenegocioProcesos,
    }
];