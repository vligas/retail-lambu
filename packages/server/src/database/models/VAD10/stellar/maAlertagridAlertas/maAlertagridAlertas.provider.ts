import { MaAlertagridAlertas } from './maAlertagridAlertas.entity';
import { Provider } from '@nestjs/common';

export const maAlertagridAlertasProviders: Provider[] = [
    {
        provide: MaAlertagridAlertas,
        useValue: MaAlertagridAlertas,
    }
];