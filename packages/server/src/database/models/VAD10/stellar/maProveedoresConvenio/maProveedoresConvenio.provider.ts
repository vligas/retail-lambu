import { MaProveedoresConvenio } from './maProveedoresConvenio.entity';
import { Provider } from '@nestjs/common';

export const maProveedoresConvenioProviders: Provider[] = [
    {
        provide: MaProveedoresConvenio,
        useValue: MaProveedoresConvenio,
    }
];