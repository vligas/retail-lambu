import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { VirtualQueue } from '../../database/models/virtualQueue/virtualQueue.entity';

export default class VirtualQueueSeeder implements SeedInterface {
    constructor(@Inject(VirtualQueue) private  virtualQueueRepository: typeof  VirtualQueue) { }

    async run() {
        const queues: Array<Partial< VirtualQueue>> = [{
            name: 'Charquteria',
            actualTurn: 2,
            limitTurn: 100,
        }, {
            name: 'Pescaderia',
            actualTurn: 1,
            limitTurn: 100,

        }, {
            name: 'nudes',
            actualTurn: 1,
            limitTurn: 69,

        }];

        await this.virtualQueueRepository.bulkCreate(queues);
    }
}