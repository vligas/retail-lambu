import { MaCxpImpuestos } from './maCxpImpuestos.entity';
import { Provider } from '@nestjs/common';

export const maCxpImpuestosProviders: Provider[] = [
    {
        provide: MaCxpImpuestos,
        useValue: MaCxpImpuestos,
    }
];