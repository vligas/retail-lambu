import { MaVentasImpuestos } from './maVentasImpuestos.entity';
import { Provider } from '@nestjs/common';

export const maVentasImpuestosProviders: Provider[] = [
    {
        provide: MaVentasImpuestos,
        useValue: MaVentasImpuestos,
    }
];