import { TrFacturasProgpagos } from './trFacturasProgpagos.entity';
import { Provider } from '@nestjs/common';

export const trFacturasProgpagosProviders: Provider[] = [
    {
        provide: TrFacturasProgpagos,
        useValue: TrFacturasProgpagos,
    }
];