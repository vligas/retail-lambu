import { MaConciliacionautoCambioarchivo } from './maConciliacionautoCambioarchivo.entity';
import { Provider } from '@nestjs/common';

export const maConciliacionautoCambioarchivoProviders: Provider[] = [
    {
        provide: MaConciliacionautoCambioarchivo,
        useValue: MaConciliacionautoCambioarchivo,
    }
];