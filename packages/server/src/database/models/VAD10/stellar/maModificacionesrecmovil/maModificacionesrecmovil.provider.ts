import { MaModificacionesrecmovil } from './maModificacionesrecmovil.entity';
import { Provider } from '@nestjs/common';

export const maModificacionesrecmovilProviders: Provider[] = [
    {
        provide: MaModificacionesrecmovil,
        useValue: MaModificacionesrecmovil,
    }
];