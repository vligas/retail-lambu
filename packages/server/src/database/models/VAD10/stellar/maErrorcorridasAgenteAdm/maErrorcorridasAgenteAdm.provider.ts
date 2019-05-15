import { MaErrorcorridasAgenteAdm } from './maErrorcorridasAgenteAdm.entity';
import { Provider } from '@nestjs/common';

export const maErrorcorridasAgenteAdmProviders: Provider[] = [
    {
        provide: MaErrorcorridasAgenteAdm,
        useValue: MaErrorcorridasAgenteAdm,
    }
];