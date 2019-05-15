import { TrCambiosPremios } from './trCambiosPremios.entity';
import { Provider } from '@nestjs/common';

export const trCambiosPremiosProviders: Provider[] = [
    {
        provide: TrCambiosPremios,
        useValue: TrCambiosPremios,
    }
];