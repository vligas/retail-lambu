import { MaConfigLibro } from './maConfigLibro.entity';
import { Provider } from '@nestjs/common';

export const maConfigLibroProviders: Provider[] = [
    {
        provide: MaConfigLibro,
        useValue: MaConfigLibro,
    }
];