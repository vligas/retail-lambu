import { TrInterfaz } from './trInterfaz.entity';
import { Provider } from '@nestjs/common';

export const trInterfazProviders: Provider[] = [
    {
        provide: TrInterfaz,
        useValue: TrInterfaz,
    }
];