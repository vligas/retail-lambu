import { TrAuxDespacho } from './trAuxDespacho.entity';
import { Provider } from '@nestjs/common';

export const trAuxDespachoProviders: Provider[] = [
    {
        provide: TrAuxDespacho,
        useValue: TrAuxDespacho,
    }
];