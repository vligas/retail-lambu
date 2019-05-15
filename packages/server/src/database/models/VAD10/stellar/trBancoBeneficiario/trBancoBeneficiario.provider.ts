import { TrBancoBeneficiario } from './trBancoBeneficiario.entity';
import { Provider } from '@nestjs/common';

export const trBancoBeneficiarioProviders: Provider[] = [
    {
        provide: TrBancoBeneficiario,
        useValue: TrBancoBeneficiario,
    }
];