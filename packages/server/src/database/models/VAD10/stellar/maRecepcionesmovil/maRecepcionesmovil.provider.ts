import { MaRecepcionesmovil } from './maRecepcionesmovil.entity';
import { Provider } from '@nestjs/common';

export const maRecepcionesmovilProviders: Provider[] = [
    {
        provide: MaRecepcionesmovil,
        useValue: MaRecepcionesmovil,
    }
];