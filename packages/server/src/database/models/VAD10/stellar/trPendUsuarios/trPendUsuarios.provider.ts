import { TrPendUsuarios } from './trPendUsuarios.entity';
import { Provider } from '@nestjs/common';

export const trPendUsuariosProviders: Provider[] = [
    {
        provide: TrPendUsuarios,
        useValue: TrPendUsuarios,
    }
];