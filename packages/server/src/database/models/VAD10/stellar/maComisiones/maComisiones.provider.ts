import { MaComisiones } from './maComisiones.entity';
import { Provider } from '@nestjs/common';

export const maComisionesProviders: Provider[] = [
    {
        provide: MaComisiones,
        useValue: MaComisiones,
    }
];