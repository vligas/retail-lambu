import { MaBalanzas } from './maBalanzas.entity';
import { Provider } from '@nestjs/common';

export const maBalanzasProviders: Provider[] = [
    {
        provide: MaBalanzas,
        useValue: MaBalanzas,
    }
];