import { TrComparativoPrecios } from './trComparativoPrecios.entity';
import { Provider } from '@nestjs/common';

export const trComparativoPreciosProviders: Provider[] = [
    {
        provide: TrComparativoPrecios,
        useValue: TrComparativoPrecios,
    }
];