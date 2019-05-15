import { TrCambioprecio } from './trCambioprecio.entity';
import { Provider } from '@nestjs/common';

export const trCambioprecioProviders: Provider[] = [
    {
        provide: TrCambioprecio,
        useValue: TrCambioprecio,
    }
];