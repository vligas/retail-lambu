import { TrImpuesto } from './trImpuesto.entity';
import { Provider } from '@nestjs/common';

export const trImpuestoProviders: Provider[] = [
    {
        provide: TrImpuesto,
        useValue: TrImpuesto,
    }
];