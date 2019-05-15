import { EstrucSis } from './estrucSis.entity';
import { Provider } from '@nestjs/common';

export const estrucSisProviders: Provider[] = [
    {
        provide: EstrucSis,
        useValue: EstrucSis,
    }
];