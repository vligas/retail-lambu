import { TrConsPrecios } from './trConsPrecios.entity';
import { Provider } from '@nestjs/common';

export const trConsPreciosProviders: Provider[] = [
    {
        provide: TrConsPrecios,
        useValue: TrConsPrecios,
    }
];