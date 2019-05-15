import { MaInventario } from './maInventario.entity';
import { Provider } from '@nestjs/common';

export const maInventarioProviders: Provider[] = [
    {
        provide: MaInventario,
        useValue: MaInventario,
    }
];