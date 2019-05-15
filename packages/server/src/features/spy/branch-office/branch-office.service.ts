import { Injectable, Inject } from '@nestjs/common';
import { BranchOffice } from 'src/database/models/VAD10/branchOffice/branchOffice.entity';
import { Competitor } from 'src/database/models/VAD10/competitor/competitor.entity';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { RequestCreateBranchOfficeDto, RequestUpdateBranchOfficeDto } from './branchOffice.dto';

@Injectable()
export class BranchOfficeService {

    constructor(
        @Inject(BranchOffice) private readonly brachOfficeRepository: typeof BranchOffice,
        @Inject(Competitor) private readonly competitorRepository: typeof Competitor,
    ) { }

    async all(options: ServiceOptions) {
        return await this.brachOfficeRepository.findAll({
            include: [{
                model: this.competitorRepository
            }],
        });
    }

    async byId(id: number) {
        return await this.brachOfficeRepository.findOne({
            include: [{
                model: this.competitorRepository
            }],
            where: {
                id
            }
        });
    }

    async create(register: RequestCreateBranchOfficeDto) {
        return await this.brachOfficeRepository.create(register);
    }

    async update(id: number, register: RequestUpdateBranchOfficeDto) {
        const updateBranchOficce = await this.byId(id);
        return await updateBranchOficce.update(register);
    }

    async delete(id: number) {
        const entity = await this.byId(id);
        await entity.destroy();
    }
}
