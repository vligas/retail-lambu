import { ConfigurarSal } from './configurarSal.entity';
import { Provider } from '@nestjs/common';

export const configurarSalProviders: Provider[] = [
    {
        provide: ConfigurarSal,
        useValue: ConfigurarSal,
    }
];