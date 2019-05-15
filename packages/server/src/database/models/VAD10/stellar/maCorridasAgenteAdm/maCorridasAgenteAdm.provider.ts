import { MaCorridasAgenteAdm } from './maCorridasAgenteAdm.entity';
import { Provider } from '@nestjs/common';

export const maCorridasAgenteAdmProviders: Provider[] = [
    {
        provide: MaCorridasAgenteAdm,
        useValue: MaCorridasAgenteAdm,
    }
];