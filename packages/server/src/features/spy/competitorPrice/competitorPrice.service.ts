import { Competitor } from 'src/database/models/VAD10/competitor/competitor.entity';
import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { BranchOffice } from 'src/database/models/VAD10/branchOffice/branchOffice.entity';
import { RequestCreateCompetitorPriceDto } from './competitorPrice.dto';
import { Sequelize } from 'sequelize-typescript';
import { DATABASEVAD10 } from 'src/database/database.providers';
import { logger } from 'src/common/services/logger.service';
import { CompetitorPrice } from 'src/database/models/VAD10/competitorPrice/competitorPrice.entity';

@Injectable()
export class CompetitorPriceService {

    constructor(
        @Inject(CompetitorPrice) private readonly competitorPriceRepository: typeof CompetitorPrice,
    ) {

    }

    async all(options: ServiceOptions) {
        return await this.competitorPriceRepository.findAll({
            limit: options.pageSize,
            offset: options.pageSize * (options.page - 1),
        });
    }

    async create(competitorPrice: any) {
        return await this.competitorPriceRepository.create(competitorPrice);
    }
}
