import { MaClientesConvenios } from './maClientesConvenios.entity';
import { Provider } from '@nestjs/common';

export const maClientesConveniosProviders: Provider[] = [
    {
        provide: MaClientesConvenios,
        useValue: MaClientesConvenios,
    }
];