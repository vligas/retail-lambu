import { MaPresentacion } from './maPresentacion.entity';
import { Provider } from '@nestjs/common';

export const maPresentacionProviders: Provider[] = [
    {
        provide: MaPresentacion,
        useValue: MaPresentacion,
    }
];