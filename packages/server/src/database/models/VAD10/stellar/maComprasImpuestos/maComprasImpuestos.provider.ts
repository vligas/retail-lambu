import { MaComprasImpuestos } from './maComprasImpuestos.entity';
import { Provider } from '@nestjs/common';

export const maComprasImpuestosProviders: Provider[] = [
    {
        provide: MaComprasImpuestos,
        useValue: MaComprasImpuestos,
    }
];