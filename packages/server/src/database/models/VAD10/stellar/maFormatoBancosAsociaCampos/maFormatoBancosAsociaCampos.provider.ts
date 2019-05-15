import { MaFormatoBancosAsociaCampos } from './maFormatoBancosAsociaCampos.entity';
import { Provider } from '@nestjs/common';

export const maFormatoBancosAsociaCamposProviders: Provider[] = [
    {
        provide: MaFormatoBancosAsociaCampos,
        useValue: MaFormatoBancosAsociaCampos,
    }
];