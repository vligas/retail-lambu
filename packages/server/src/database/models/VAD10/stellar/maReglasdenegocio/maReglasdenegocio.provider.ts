import { MaReglasdenegocio } from './maReglasdenegocio.entity';
import { Provider } from '@nestjs/common';

export const maReglasdenegocioProviders: Provider[] = [
    {
        provide: MaReglasdenegocio,
        useValue: MaReglasdenegocio,
    }
];