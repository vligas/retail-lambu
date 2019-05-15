import { MaComparativoPrecios } from './maComparativoPrecios.entity';
import { Provider } from '@nestjs/common';

export const maComparativoPreciosProviders: Provider[] = [
    {
        provide: MaComparativoPrecios,
        useValue: MaComparativoPrecios,
    }
];