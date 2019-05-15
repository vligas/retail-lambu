import { MaDenominaciones } from './maDenominaciones.entity';
import { Provider } from '@nestjs/common';

export const maDenominacionesProviders: Provider[] = [
    {
        provide: MaDenominaciones,
        useValue: MaDenominaciones,
    }
];