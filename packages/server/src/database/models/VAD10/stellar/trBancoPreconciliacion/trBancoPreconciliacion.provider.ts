import { TrBancoPreconciliacion } from './trBancoPreconciliacion.entity';
import { Provider } from '@nestjs/common';

export const trBancoPreconciliacionProviders: Provider[] = [
    {
        provide: TrBancoPreconciliacion,
        useValue: TrBancoPreconciliacion,
    }
];