import { MaReglasdenegocioOldBak } from './maReglasdenegocioOldBak.entity';
import { Provider } from '@nestjs/common';

export const maReglasdenegocioOldBakProviders: Provider[] = [
    {
        provide: MaReglasdenegocioOldBak,
        useValue: MaReglasdenegocioOldBak,
    }
];