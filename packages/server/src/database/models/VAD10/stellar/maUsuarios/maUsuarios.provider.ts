import { MaUsuarios } from './maUsuarios.entity';
import { Provider } from '@nestjs/common';

export const maUsuariosProviders: Provider[] = [
    {
        provide: MaUsuarios,
        useValue: MaUsuarios,
    }
];