import { TrTablasSyncronizar } from './trTablasSyncronizar.entity';
import { Provider } from '@nestjs/common';

export const trTablasSyncronizarProviders: Provider[] = [
    {
        provide: TrTablasSyncronizar,
        useValue: TrTablasSyncronizar,
    }
];