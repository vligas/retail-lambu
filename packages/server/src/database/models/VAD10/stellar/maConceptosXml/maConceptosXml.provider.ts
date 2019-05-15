import { MaConceptosXml } from './maConceptosXml.entity';
import { Provider } from '@nestjs/common';

export const maConceptosXmlProviders: Provider[] = [
    {
        provide: MaConceptosXml,
        useValue: MaConceptosXml,
    }
];