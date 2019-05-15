import { MaEntregas } from './maEntregas.entity';
import { Provider } from '@nestjs/common';

export const maEntregasProviders: Provider[] = [
    {
        provide: MaEntregas,
        useValue: MaEntregas,
    }
];