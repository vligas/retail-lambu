import { TrRecepcionDeDocumento } from './trRecepcionDeDocumento.entity';
import { Provider } from '@nestjs/common';

export const trRecepcionDeDocumentoProviders: Provider[] = [
    {
        provide: TrRecepcionDeDocumento,
        useValue: TrRecepcionDeDocumento,
    }
];