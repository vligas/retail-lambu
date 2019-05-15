import { MaBancoscta } from './maBancoscta.entity';
import { Provider } from '@nestjs/common';

export const maBancosctaProviders: Provider[] = [
    {
        provide: MaBancoscta,
        useValue: MaBancoscta,
    }
];