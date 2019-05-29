import { Injectable, Inject } from '@nestjs/common';
import { VirtualQueue } from '../../database/models/virtualQueue/virtualQueue.entity';
import { ResponseAllVirtualQueueDto } from './virtualQueue.dto'; 
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface'; 

@Injectable()
export class VirtualQueueService {
    constructor(
        @Inject(VirtualQueue) private readonly virtualQueueRepository: typeof VirtualQueue,
    ) { }

    async all(options: ServiceOptions) { 
        return await this.virtualQueueRepository.findAll(options); 
    }

    async actualTurn(id: number){ 
        return await this.virtualQueueRepository.findOne({ where: {id: id} }) 
    } 
 
    async nextTurn(id: number){ 
        const dep = await this.virtualQueueRepository.findOne({ where: {id: id} }) 
        let bazz = dep.toJSON() as ResponseAllVirtualQueueDto; 
        bazz.actualTurn= (bazz.actualTurn === bazz.limitTurn)? 0: bazz.actualTurn+1; 
        this.virtualQueueRepository.update(bazz, {where: {id: id}}); 
 
        return bazz; 
        // this.virtualQueueRepository.update({ field: Sequelize.literal('actualTurn + 1') }, { where: { id: id } }); 
    } 

}
