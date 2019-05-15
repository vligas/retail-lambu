import { MaChequeras } from './maChequeras.entity';
import { Provider } from '@nestjs/common';

export const maChequerasProviders: Provider[] = [
    {
        provide: MaChequeras,
        useValue: MaChequeras,
    }
];