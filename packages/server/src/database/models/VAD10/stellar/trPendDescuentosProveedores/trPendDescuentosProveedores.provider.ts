import { TrPendDescuentosProveedores } from './trPendDescuentosProveedores.entity';
import { Provider } from '@nestjs/common';

export const trPendDescuentosProveedoresProviders: Provider[] = [
    {
        provide: TrPendDescuentosProveedores,
        useValue: TrPendDescuentosProveedores,
    }
];