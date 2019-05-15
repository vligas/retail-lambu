import { TrDespacho } from './trDespacho.entity';
import { Provider } from '@nestjs/common';

export const trDespachoProviders: Provider[] = [
    {
        provide: TrDespacho,
        useValue: TrDespacho,
    }
];