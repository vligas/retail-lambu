import { Module } from '@nestjs/common';
import { CompetitorController } from './competitor/competitor.controller';
import { CompetitorService } from './competitor/competitor.service';
import { ConfigModule } from '@retail/common';
import { ParamsModule } from '../params/params.module';
import { BranchOfficeController } from './branch-office/branch-office.controller';
import { BranchOfficeService } from './branch-office/branch-office.service';
import { CompetitorPriceController } from './competitorPrice/competitorPrice.controller';
import { CompetitorPriceService } from './competitorPrice/competitorPrice.service';
import { RouteController } from './router/route.controller';
import { RouteService } from './router/route.service';
import { AuthModule } from '../auth/auth.module';
import { EntityModule } from '@retail/common/src/database/database.module';
import {  BranchOffice, Competitor, Role, CompetitorPrice, RouteUser, User} from '../../database';

@Module({
  imports: [
    EntityModule.forFeature(
      [
      Competitor, 
      BranchOffice,
      Role, 
      CompetitorPrice,
      RouteUser,
      User
    ]),
    ConfigModule,
    ParamsModule,
  ],
  controllers: [
    CompetitorController,
    BranchOfficeController,
    CompetitorPriceController,
    RouteController,
  ],
  providers: [
    CompetitorService,
    BranchOfficeService,
    CompetitorPriceService,
    RouteService,
  ]
})
export class SpyModule { }
