import { Injectable, Inject } from '@nestjs/common';
import { VirtualQueue } from '../../database/models/virtualQueue/virtualQueue.entity';

@Injectable()
export class VirtualQueueService {
    constructor(
        @Inject(VirtualQueue) private readonly virtualQueueRepository: typeof VirtualQueue,
    ) { }

    async all() {
        return await this.virtualQueueRepository.findAll({
            limit: 50,
        });
    }

}
