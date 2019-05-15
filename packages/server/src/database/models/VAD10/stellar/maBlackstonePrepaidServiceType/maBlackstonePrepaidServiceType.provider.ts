import { MaBlackstonePrepaidServiceType } from './maBlackstonePrepaidServiceType.entity';
import { Provider } from '@nestjs/common';

export const maBlackstonePrepaidServiceTypeProviders: Provider[] = [
    {
        provide: MaBlackstonePrepaidServiceType,
        useValue: MaBlackstonePrepaidServiceType,
    }
];