import { TrMaComparativoPrecios } from './trMaComparativoPrecios.entity';
import { Provider } from '@nestjs/common';

export const trMaComparativoPreciosProviders: Provider[] = [
    {
        provide: TrMaComparativoPrecios,
        useValue: TrMaComparativoPrecios,
    }
];