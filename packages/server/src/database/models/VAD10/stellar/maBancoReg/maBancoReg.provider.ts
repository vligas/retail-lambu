import { MaBancoReg } from './maBancoReg.entity';
import { Provider } from '@nestjs/common';

export const maBancoRegProviders: Provider[] = [
    {
        provide: MaBancoReg,
        useValue: MaBancoReg,
    }
];