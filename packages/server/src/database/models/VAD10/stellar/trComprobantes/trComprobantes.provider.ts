import { TrComprobantes } from './trComprobantes.entity';
import { Provider } from '@nestjs/common';

export const trComprobantesProviders: Provider[] = [
    {
        provide: TrComprobantes,
        useValue: TrComprobantes,
    }
];