import { MaCambiosPremiosConsolidados } from './maCambiosPremiosConsolidados.entity';
import { Provider } from '@nestjs/common';

export const maCambiosPremiosConsolidadosProviders: Provider[] = [
    {
        provide: MaCambiosPremiosConsolidados,
        useValue: MaCambiosPremiosConsolidados,
    }
];