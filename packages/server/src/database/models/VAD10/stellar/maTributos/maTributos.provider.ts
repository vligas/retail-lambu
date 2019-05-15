import { MaTributos } from './maTributos.entity';
import { Provider } from '@nestjs/common';

export const maTributosProviders: Provider[] = [
    {
        provide: MaTributos,
        useValue: MaTributos,
    }
];