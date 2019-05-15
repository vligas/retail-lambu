import { ReglasComerciales } from './reglasComerciales.entity';
import { Provider } from '@nestjs/common';

export const reglasComercialesProviders: Provider[] = [
    {
        provide: ReglasComerciales,
        useValue: ReglasComerciales,
    }
];