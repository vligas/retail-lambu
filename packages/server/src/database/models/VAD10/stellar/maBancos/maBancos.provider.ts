import { MaBancos } from './maBancos.entity';
import { Provider } from '@nestjs/common';

export const maBancosProviders: Provider[] = [
    {
        provide: MaBancos,
        useValue: MaBancos,
    }
];