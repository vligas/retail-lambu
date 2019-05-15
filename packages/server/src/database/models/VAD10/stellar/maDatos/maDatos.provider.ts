import { MaDatos } from './maDatos.entity';
import { Provider } from '@nestjs/common';

export const maDatosProviders: Provider[] = [
    {
        provide: MaDatos,
        useValue: MaDatos,
    }
];