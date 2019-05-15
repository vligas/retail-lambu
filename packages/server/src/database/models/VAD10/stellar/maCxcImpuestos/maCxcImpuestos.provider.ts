import { MaCxcImpuestos } from './maCxcImpuestos.entity';
import { Provider } from '@nestjs/common';

export const maCxcImpuestosProviders: Provider[] = [
    {
        provide: MaCxcImpuestos,
        useValue: MaCxcImpuestos,
    }
];