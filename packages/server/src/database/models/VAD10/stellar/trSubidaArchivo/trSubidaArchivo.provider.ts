import { TrSubidaArchivo } from './trSubidaArchivo.entity';
import { Provider } from '@nestjs/common';

export const trSubidaArchivoProviders: Provider[] = [
    {
        provide: TrSubidaArchivo,
        useValue: TrSubidaArchivo,
    }
];