import { Injectable, Inject } from '@nestjs/common';
import { VirtualQueue } from '../../database/models/virtualQueue/virtualQueue.entity';
import { ResponseAllVirtualQueueDto } from './virtualQueue.dto'; 
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface'; 

@Injectable()
export class VirtualQueueService {
    constructor(
        @Inject(VirtualQueue) private readonly virtualQueueRepository: typeof VirtualQueue,
    ) { }

    async all(options?: ServiceOptions) { 
        return await this.virtualQueueRepository.findAll(); 
    }

    async actualTurn(id: number){ 
        return await this.virtualQueueRepository.findOne({ where: {id: id} }) 
    } 
 
    async nextTurn(id: number){ 
        const dep = await this.virtualQueueRepository.findOne({ where: {id: id} }) 
        let register = dep.toJSON() as ResponseAllVirtualQueueDto; 
        register.actualTurn= (register.actualTurn === register.limitTurn)? 0: register.actualTurn+1; 
        await this.virtualQueueRepository.update(register, {where: {id: id}}); 
 
        return register; 
        // this.virtualQueueRepository.update({ field: Sequelize.literal('actualTurn + 1') }, { where: { id: id } }); 
    } 

}
