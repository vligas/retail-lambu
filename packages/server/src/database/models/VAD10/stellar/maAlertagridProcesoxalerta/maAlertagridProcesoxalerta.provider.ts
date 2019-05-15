import { MaAlertagridProcesoxalerta } from './maAlertagridProcesoxalerta.entity';
import { Provider } from '@nestjs/common';

export const maAlertagridProcesoxalertaProviders: Provider[] = [
    {
        provide: MaAlertagridProcesoxalerta,
        useValue: MaAlertagridProcesoxalerta,
    }
];