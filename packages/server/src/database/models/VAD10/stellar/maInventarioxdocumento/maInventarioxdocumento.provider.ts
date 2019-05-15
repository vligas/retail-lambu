import { MaInventarioxdocumento } from './maInventarioxdocumento.entity';
import { Provider } from '@nestjs/common';

export const maInventarioxdocumentoProviders: Provider[] = [
    {
        provide: MaInventarioxdocumento,
        useValue: MaInventarioxdocumento,
    }
];