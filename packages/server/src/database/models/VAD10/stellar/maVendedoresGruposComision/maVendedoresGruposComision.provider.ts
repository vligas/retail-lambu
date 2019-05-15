import { MaVendedoresGruposComision } from './maVendedoresGruposComision.entity';
import { Provider } from '@nestjs/common';

export const maVendedoresGruposComisionProviders: Provider[] = [
    {
        provide: MaVendedoresGruposComision,
        useValue: MaVendedoresGruposComision,
    }
];