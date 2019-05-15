import { MaCambiocodigo } from './maCambiocodigo.entity';
import { Provider } from '@nestjs/common';

export const maCambiocodigoProviders: Provider[] = [
    {
        provide: MaCambiocodigo,
        useValue: MaCambiocodigo,
    }
];