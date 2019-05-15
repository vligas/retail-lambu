import { MaCorridasAgenteClientes } from './maCorridasAgenteClientes.entity';
import { Provider } from '@nestjs/common';

export const maCorridasAgenteClientesProviders: Provider[] = [
    {
        provide: MaCorridasAgenteClientes,
        useValue: MaCorridasAgenteClientes,
    }
];