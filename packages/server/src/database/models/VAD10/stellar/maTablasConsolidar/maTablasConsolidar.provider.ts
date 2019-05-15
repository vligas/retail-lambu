import { MaTablasConsolidar } from './maTablasConsolidar.entity';
import { Provider } from '@nestjs/common';

export const maTablasConsolidarProviders: Provider[] = [
    {
        provide: MaTablasConsolidar,
        useValue: MaTablasConsolidar,
    }
];