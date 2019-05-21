import { Module } from '@nestjs/common';
import { ConfigModule } from '@retail/common';
import { GapController } from './gap/gap.controller';
import { GapService } from './gap/gap.service';
import { ParamsModule } from '../params/params.module';
import { PriceVariationController } from './priceVariation/priceVariation.controller';
import { PriceVariationService } from './priceVariation/priceVariation.service';
import { SaleController } from './sale/sale.controller';
import { SaleService } from './sale/sale.service';
import { EntityModule } from '@retail/common/src/database/database.module';
import { Role, Permission, TrOdc, MaOdc, Tag, Product, TrInventario} from '../../database';

@Module({
    imports: [
        EntityModule.forFeature([
            Product,
            TrOdc,
            MaOdc,
            TrInventario,  
            Tag,
            Permission,
            Role
        ]),
        ConfigModule, 
        ParamsModule, 
  ],
    controllers: [
        GapController, 
        PriceVariationController, 
        SaleController
    ],
    providers: [
        GapService, 
        PriceVariationService, 
        SaleService
    ],
})
export class ReportsModule { }
