import { MaDocumentosFiscal } from './maDocumentosFiscal.entity';
import { Provider } from '@nestjs/common';

export const maDocumentosFiscalProviders: Provider[] = [
    {
        provide: MaDocumentosFiscal,
        useValue: MaDocumentosFiscal,
    }
];