import { MaDepartamentos } from './maDepartamentos.entity';
import { Provider } from '@nestjs/common';

export const maDepartamentosProviders: Provider[] = [
    {
        provide: MaDepartamentos,
        useValue: MaDepartamentos,
    }
];