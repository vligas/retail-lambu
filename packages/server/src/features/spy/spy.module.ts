import { Module } from '@nestjs/common';
import { CompetitorController } from './competitor/competitor.controller';
import { CompetitorService } from './competitor/competitor.service';
import { ConfigModule } from 'src/config/config.module';
import { ParamsModule } from '../params/params.module';
import { BranchOfficeController } from './branch-office/branch-office.controller';
import { BranchOfficeService } from './branch-office/branch-office.service';
import { CompetitorPriceController } from './competitorPrice/competitorPrice.controller';
import { CompetitorPriceService } from './competitorPrice/competitorPrice.service';
import { RouteController } from './router/route.controller';
import { RouteService } from './router/route.service';
import { AuthModule } from '../auth/auth.module';
import { EntityModule } from '@retail/common/database/database.module';
import { Competitor } from '../../database/models/VAD10/competitor/competitor.entity';
import { BranchOffice } from '../../database/models/VAD10/branchOffice/branchOffice.entity';
import { Role } from '../../database/models/VAD10/role/role.entity';
import { CompetitorPrice } from '../../database/models/VAD10/competitorPrice/competitorPrice.entity';
import { RouteUser } from '../../database/models/VAD10/routerUser/routeUser.entity';
import { User } from '../../database/models/VAD10/user/user.entity';

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
