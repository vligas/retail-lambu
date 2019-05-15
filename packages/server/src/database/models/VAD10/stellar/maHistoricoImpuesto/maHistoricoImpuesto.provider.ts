import { MaHistoricoImpuesto } from './maHistoricoImpuesto.entity';
import { Provider } from '@nestjs/common';

export const maHistoricoImpuestoProviders: Provider[] = [
    {
        provide: MaHistoricoImpuesto,
        useValue: MaHistoricoImpuesto,
    }
];