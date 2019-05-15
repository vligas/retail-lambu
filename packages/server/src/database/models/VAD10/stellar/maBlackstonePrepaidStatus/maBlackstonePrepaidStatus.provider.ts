import { MaBlackstonePrepaidStatus } from './maBlackstonePrepaidStatus.entity';
import { Provider } from '@nestjs/common';

export const maBlackstonePrepaidStatusProviders: Provider[] = [
    {
        provide: MaBlackstonePrepaidStatus,
        useValue: MaBlackstonePrepaidStatus,
    }
];