import { MaLibrosConfigurados } from './maLibrosConfigurados.entity';
import { Provider } from '@nestjs/common';

export const maLibrosConfiguradosProviders: Provider[] = [
    {
        provide: MaLibrosConfigurados,
        useValue: MaLibrosConfigurados,
    }
];