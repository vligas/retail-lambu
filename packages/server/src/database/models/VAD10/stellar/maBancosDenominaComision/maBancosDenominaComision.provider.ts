import { MaBancosDenominaComision } from './maBancosDenominaComision.entity';
import { Provider } from '@nestjs/common';

export const maBancosDenominaComisionProviders: Provider[] = [
    {
        provide: MaBancosDenominaComision,
        useValue: MaBancosDenominaComision,
    }
];