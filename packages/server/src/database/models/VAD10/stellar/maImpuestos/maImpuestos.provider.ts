import { MaImpuestos } from './maImpuestos.entity';
import { Provider } from '@nestjs/common';

export const maImpuestosProviders: Provider[] = [
    {
        provide: MaImpuestos,
        useValue: MaImpuestos,
    }
];