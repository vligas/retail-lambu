import { MaOpbancos } from './maOpbancos.entity';
import { Provider } from '@nestjs/common';

export const maOpbancosProviders: Provider[] = [
    {
        provide: MaOpbancos,
        useValue: MaOpbancos,
    }
];