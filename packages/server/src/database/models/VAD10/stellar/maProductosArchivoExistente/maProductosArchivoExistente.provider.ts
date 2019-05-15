import { MaProductosArchivoExistente } from './maProductosArchivoExistente.entity';
import { Provider } from '@nestjs/common';

export const maProductosArchivoExistenteProviders: Provider[] = [
    {
        provide: MaProductosArchivoExistente,
        useValue: MaProductosArchivoExistente,
    }
];