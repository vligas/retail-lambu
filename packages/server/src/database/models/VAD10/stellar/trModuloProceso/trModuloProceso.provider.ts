import { TrModuloProceso } from './trModuloProceso.entity';
import { Provider } from '@nestjs/common';

export const trModuloProcesoProviders: Provider[] = [
    {
        provide: TrModuloProceso,
        useValue: TrModuloProceso,
    }
];