import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from 'src/config/config.module';
import { GapController } from './gap/gap.controller';
import { GapService } from './gap/gap.service';
import { ParamsModule } from '../params/params.module';
import { PriceVariationController } from './priceVariation/priceVariation.controller';
import { PriceVariationService } from './priceVariation/priceVariation.service';
import { SaleController } from './sale/sale.controller';
import { SaleService } from './sale/sale.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [DatabaseModule, ConfigModule, ParamsModule, AuthModule],
    controllers: [GapController, PriceVariationController, SaleController],
    providers: [GapService, PriceVariationService, SaleService],
})
export class ReportsModule { }
