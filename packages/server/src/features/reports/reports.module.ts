import { Module } from '@nestjs/common';
import { ConfigModule } from '@retail/common';
import { GapController } from './gap/gap.controller';
import { GapService } from './gap/gap.service';
import { ParamsModule } from '../params/params.module';
import { PriceVariationController } from './priceVariation/priceVariation.controller';
import { PriceVariationService } from './priceVariation/priceVariation.service';
import { SaleController } from './sale/sale.controller';
import { SaleService } from './sale/sale.service';
import { AuthModule } from '../auth/auth.module';
import { EntityModule } from '@retail/common/src/database/database.module';
import { TrInventario } from '../../database/models/VAD10/stellar/trInventario/trInventario.entity';
import { Product } from '../../database/models/VAD10/exProduct/product.entity';
import { Tag } from '../../database/models/VAD10/tag/tag.entity';
import { MaOdc } from '../../database/models/VAD10/stellar/maOdc/maOdc.entity';
import { TrOdc } from '../../database/models/VAD10/stellar/trOdc/trOdc.entity';
import { Permission } from '../../database/models/VAD10/permission/permission.entity';
import { Role } from '../../database/models/VAD10/role/role.entity';

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
