import { TrPendProductosGenericos } from './trPendProductosGenericos.entity';
import { Provider } from '@nestjs/common';

export const trPendProductosGenericosProviders: Provider[] = [
    {
        provide: TrPendProductosGenericos,
        useValue: TrPendProductosGenericos,
    }
];