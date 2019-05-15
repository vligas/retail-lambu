import { TrDocumentosfiscalNoimp } from './trDocumentosfiscalNoimp.entity';
import { Provider } from '@nestjs/common';

export const trDocumentosfiscalNoimpProviders: Provider[] = [
    {
        provide: TrDocumentosfiscalNoimp,
        useValue: TrDocumentosfiscalNoimp,
    }
];