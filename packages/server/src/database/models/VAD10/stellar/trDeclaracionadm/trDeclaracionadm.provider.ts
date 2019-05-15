import { TrDeclaracionadm } from './trDeclaracionadm.entity';
import { Provider } from '@nestjs/common';

export const trDeclaracionadmProviders: Provider[] = [
    {
        provide: TrDeclaracionadm,
        useValue: TrDeclaracionadm,
    }
];