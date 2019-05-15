import { TrLibrosConfigurados } from './trLibrosConfigurados.entity';
import { Provider } from '@nestjs/common';

export const trLibrosConfiguradosProviders: Provider[] = [
    {
        provide: TrLibrosConfigurados,
        useValue: TrLibrosConfigurados,
    }
];