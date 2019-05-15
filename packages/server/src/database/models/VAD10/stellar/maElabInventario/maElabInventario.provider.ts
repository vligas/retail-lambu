import { MaElabInventario } from './maElabInventario.entity';
import { Provider } from '@nestjs/common';

export const maElabInventarioProviders: Provider[] = [
    {
        provide: MaElabInventario,
        useValue: MaElabInventario,
    }
];