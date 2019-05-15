import { MaTempRepHistorico } from './maTempRepHistorico.entity';
import { Provider } from '@nestjs/common';

export const maTempRepHistoricoProviders: Provider[] = [
    {
        provide: MaTempRepHistorico,
        useValue: MaTempRepHistorico,
    }
];