import { MaCatalogoPremios } from './maCatalogoPremios.entity';
import { Provider } from '@nestjs/common';

export const maCatalogoPremiosProviders: Provider[] = [
    {
        provide: MaCatalogoPremios,
        useValue: MaCatalogoPremios,
    }
];