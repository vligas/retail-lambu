import { VirtualQueue } from './virtualQueue.entity';
import { Provider } from '@nestjs/common';

export const virtualQueueProviders: Provider[] = [
    {
        provide: VirtualQueue,
        useValue: VirtualQueue,
    },
];
