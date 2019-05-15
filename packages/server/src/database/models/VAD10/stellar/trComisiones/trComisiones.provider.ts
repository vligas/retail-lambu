import { TrComisiones } from './trComisiones.entity';
import { Provider } from '@nestjs/common';

export const trComisionesProviders: Provider[] = [
    {
        provide: TrComisiones,
        useValue: TrComisiones,
    }
];