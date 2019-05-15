import { MaProveedores } from './maProveedores.entity';
import { Provider } from '@nestjs/common';

export const maProveedoresProviders: Provider[] = [
    {
        provide: MaProveedores,
        useValue: MaProveedores,
    }
];