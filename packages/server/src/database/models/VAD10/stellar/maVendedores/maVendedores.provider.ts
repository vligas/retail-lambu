import { MaVendedores } from './maVendedores.entity';
import { Provider } from '@nestjs/common';

export const maVendedoresProviders: Provider[] = [
    {
        provide: MaVendedores,
        useValue: MaVendedores,
    }
];