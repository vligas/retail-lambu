import { MaDatosFiscales } from './maDatosFiscales.entity';
import { Provider } from '@nestjs/common';

export const maDatosFiscalesProviders: Provider[] = [
    {
        provide: MaDatosFiscales,
        useValue: MaDatosFiscales,
    }
];