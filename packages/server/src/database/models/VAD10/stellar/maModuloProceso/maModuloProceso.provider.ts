import { MaModuloProceso } from './maModuloProceso.entity';
import { Provider } from '@nestjs/common';

export const maModuloProcesoProviders: Provider[] = [
    {
        provide: MaModuloProceso,
        useValue: MaModuloProceso,
    }
];