import { Module } from '@nestjs/common';
import { CompetitorController } from './competitor/competitor.controller';
import { CompetitorService } from './competitor/competitor.service';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from 'src/config/config.module';
import { ParamsModule } from '../params/params.module';
import { BranchOfficeController } from './branch-office/branch-office.controller';
import { BranchOfficeService } from './branch-office/branch-office.service';
import { CompetitorPriceController } from './competitorPrice/competitorPrice.controller';
import { CompetitorPriceService } from './competitorPrice/competitorPrice.service';
import { RouteController } from './router/route.controller';
import { RouteService } from './router/route.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    ParamsModule,
    AuthModule
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
