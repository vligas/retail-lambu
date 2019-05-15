import { MaBlackstonePrepaidOrders } from './maBlackstonePrepaidOrders.entity';
import { Provider } from '@nestjs/common';

export const maBlackstonePrepaidOrdersProviders: Provider[] = [
    {
        provide: MaBlackstonePrepaidOrders,
        useValue: MaBlackstonePrepaidOrders,
    }
];