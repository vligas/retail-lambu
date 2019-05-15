import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { BranchOffice } from 'src/database/models/VAD10/branchOffice/branchOffice.entity';
import { Competitor } from 'src/database/models/VAD10/competitor/competitor.entity';

export default class BranchofficeSeeder implements SeedInterface {
    constructor(
        @Inject(BranchOffice) private branchOfficeRepository: typeof BranchOffice,
        @Inject(Competitor) private competitorRepository: typeof Competitor
        ) {}

    async run() {
        try {
            const competitor= await this.competitorRepository.findAll();

            let bulk: Array<Partial<BranchOffice>> = [];

            for (const item of competitor) {
                let branchOffice= [
                    {
                        name: 'Av. Bolivar',
                        location: '-',
                        competitorId: item.id
                    },
                    {
                        name: 'Naguanagua',
                        location: '-',
                        competitorId: item.id
                    },
                    {
                        name: 'Michelena',
                        location: '-',
                        competitorId: item.id
                    },
                    {
                        name: 'Paraparal',
                        location: '-',
                        competitorId: item.id
                    },
                    {
                        name: 'Centro',
                        location: '-',
                        competitorId: item.id
                    },
                ]

                bulk= [...bulk, ...branchOffice]
            }
            
    
            await this.branchOfficeRepository.bulkCreate(bulk);
            
        } catch (error) {
            console.error(error);
            
        }
    }
}