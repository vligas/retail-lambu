import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { VirtualQueue } from '../../database/models/virtualQueue/virtualQueue.entity';

export default class VirtualQueueSeeder implements SeedInterface {
    constructor(@Inject(VirtualQueue) private virtualQueueRepository: typeof VirtualQueue) { }

    async run() {
        const queues: Array<Partial<VirtualQueue>> = [
            {
                name: 'Pescaderia',
                actualTurn: 1,
                limitTurn: 100,
                color: 'blue',
                pathImg: 'images/carne.jpg',
            },
            {
                name: 'Charcuteria',
                actualTurn: 2,
                limitTurn: 100,
                color: 'orange',
                pathImg: 'images/pescado.jpg',
            }];

        await this.virtualQueueRepository.bulkCreate(queues);
    }
}
