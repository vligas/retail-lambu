import { TrTempRepHistorico } from './trTempRepHistorico.entity';
import { Provider } from '@nestjs/common';

export const trTempRepHistoricoProviders: Provider[] = [
    {
        provide: TrTempRepHistorico,
        useValue: TrTempRepHistorico,
    }
];