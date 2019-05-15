import { MaRecepcionDeDocumento } from './maRecepcionDeDocumento.entity';
import { Provider } from '@nestjs/common';

export const maRecepcionDeDocumentoProviders: Provider[] = [
    {
        provide: MaRecepcionDeDocumento,
        useValue: MaRecepcionDeDocumento,
    }
];