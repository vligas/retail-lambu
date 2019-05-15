import { MaCodigos } from './maCodigos.entity';
import { Provider } from '@nestjs/common';

export const maCodigosProviders: Provider[] = [
    {
        provide: MaCodigos,
        useValue: MaCodigos,
    }
];