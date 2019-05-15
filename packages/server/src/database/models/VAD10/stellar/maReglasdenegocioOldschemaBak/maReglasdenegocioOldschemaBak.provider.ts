import { MaReglasdenegocioOldschemaBak } from './maReglasdenegocioOldschemaBak.entity';
import { Provider } from '@nestjs/common';

export const maReglasdenegocioOldschemaBakProviders: Provider[] = [
    {
        provide: MaReglasdenegocioOldschemaBak,
        useValue: MaReglasdenegocioOldschemaBak,
    }
];