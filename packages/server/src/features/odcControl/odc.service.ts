import { Injectable, Inject } from '@nestjs/common';
import { ExOdc } from 'src/database/models/VAD10/exOdc/exOdc.entity';

@Injectable()
export class OdcService {
    constructor(
        @Inject(ExOdc) private readonly odcRepository: typeof ExOdc,
    ) { }

    
    async all() {
        return await this.odcRepository.findAll();
    }
   
    

}