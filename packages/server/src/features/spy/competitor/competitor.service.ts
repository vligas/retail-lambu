import { Competitor } from 'src/database/models/VAD10/competitor/competitor.entity';
import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { BranchOffice } from 'src/database/models/VAD10/branchOffice/branchOffice.entity';
import { RequestCreateCompetitorDto, RequestUpdateCompetitorDto } from './competitor.dto';
import { Sequelize } from 'sequelize-typescript';
import { DATABASEVAD10 } from 'src/database/database.providers';
import { logger } from 'src/common/services/logger.service';

@Injectable()
export class CompetitorService {

    constructor(
        @Inject(Competitor) private readonly competitorRepository: typeof Competitor,
        @Inject(BranchOffice) private readonly brachOfficeRepository: typeof BranchOffice,
        @Inject(DATABASEVAD10) private readonly db: Sequelize
    ) {

    }

    async all(options: ServiceOptions) {
        return await this.competitorRepository.findAll({
            include: [{
                model: this.brachOfficeRepository
            }],
        });
    }

    async byId(id: number) {
        return await this.competitorRepository.findOne({
            include: [{
                model: this.brachOfficeRepository
            }],
            where: {
                id
            }
        });
    }

    async create(register: RequestCreateCompetitorDto) {
        return await this.competitorRepository.create(register);
    }

    async update(id: number, register: RequestUpdateCompetitorDto) {
        const updateCompetitor = await this.byId(id);
        return await updateCompetitor.update(register);
    }

    async delete(id: number) {
        const competitor = await this.byId(id);
        await competitor.destroy();
    }

}
