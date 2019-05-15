import { MaTablasSyncronizar } from './maTablasSyncronizar.entity';
import { Provider } from '@nestjs/common';

export const maTablasSyncronizarProviders: Provider[] = [
    {
        provide: MaTablasSyncronizar,
        useValue: MaTablasSyncronizar,
    }
];