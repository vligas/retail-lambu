import { MaProductosGenericos } from './maProductosGenericos.entity';
import { Provider } from '@nestjs/common';

export const maProductosGenericosProviders: Provider[] = [
    {
        provide: MaProductosGenericos,
        useValue: MaProductosGenericos,
    }
];