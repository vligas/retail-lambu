import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Competitor } from 'src/database/models/VAD10/competitor/competitor.entity';

export default class CompetitorSeeder implements SeedInterface {
    constructor(@Inject(Competitor) private entityRepository: typeof Competitor) {}

    async run() {
        
        try {
            const companies: Array<Partial<Competitor>> = [
                { name: 'Kromi', },
                { name: 'Hiper Lider', },
                { name: 'Bio', },
                { name: 'Boga Market', },
                { name: 'Macro', },
                { name: 'Central Madeirense', },
                { name: 'Super Mercados Plaza', },
                { name: 'Ivoo', },
                { name: 'EPA'},
            ];
    
            await this.entityRepository.bulkCreate(companies);
            
        } catch (error) {
            console.error(error);
            
        }
    }
}