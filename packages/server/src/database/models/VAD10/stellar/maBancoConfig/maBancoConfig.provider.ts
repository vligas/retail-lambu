import { MaBancoConfig } from './maBancoConfig.entity';
import { Provider } from '@nestjs/common';

export const maBancoConfigProviders: Provider[] = [
    {
        provide: MaBancoConfig,
        useValue: MaBancoConfig,
    }
];