import { MaProveedoresDatosbancarios } from './maProveedoresDatosbancarios.entity';
import { Provider } from '@nestjs/common';

export const maProveedoresDatosbancariosProviders: Provider[] = [
    {
        provide: MaProveedoresDatosbancarios,
        useValue: MaProveedoresDatosbancarios,
    }
];