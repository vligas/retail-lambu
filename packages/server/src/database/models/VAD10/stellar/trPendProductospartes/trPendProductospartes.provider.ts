import { TrPendProductospartes } from './trPendProductospartes.entity';
import { Provider } from '@nestjs/common';

export const trPendProductospartesProviders: Provider[] = [
    {
        provide: TrPendProductospartes,
        useValue: TrPendProductospartes,
    }
];