import { MaSubgrupos } from './maSubgrupos.entity';
import { Provider } from '@nestjs/common';

export const maSubgruposProviders: Provider[] = [
    {
        provide: MaSubgrupos,
        useValue: MaSubgrupos,
    }
];