import { MaCambiosPremios } from './maCambiosPremios.entity';
import { Provider } from '@nestjs/common';

export const maCambiosPremiosProviders: Provider[] = [
    {
        provide: MaCambiosPremios,
        useValue: MaCambiosPremios,
    }
];