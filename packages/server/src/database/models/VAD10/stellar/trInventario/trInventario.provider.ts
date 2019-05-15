import { TrInventario } from './trInventario.entity';
import { Provider } from '@nestjs/common';

export const trInventarioProviders: Provider[] = [
    {
        provide: TrInventario,
        useValue: TrInventario,
    }
];