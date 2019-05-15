import { MaSubidaArchivo } from './maSubidaArchivo.entity';
import { Provider } from '@nestjs/common';

export const maSubidaArchivoProviders: Provider[] = [
    {
        provide: MaSubidaArchivo,
        useValue: MaSubidaArchivo,
    }
];