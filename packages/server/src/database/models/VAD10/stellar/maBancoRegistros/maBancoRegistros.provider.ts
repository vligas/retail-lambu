import { MaBancoRegistros } from './maBancoRegistros.entity';
import { Provider } from '@nestjs/common';

export const maBancoRegistrosProviders: Provider[] = [
    {
        provide: MaBancoRegistros,
        useValue: MaBancoRegistros,
    }
];