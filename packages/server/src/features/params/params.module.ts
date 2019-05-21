import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule, ServiceCommunicationModule } from '@retail/common';
import { DollarPriceController } from './dollarPrice/dollarPrice.controller';
import { DollarPriceService } from './dollarPrice/dollarPrice.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CurrencyService } from './currency/currency.service';
import { CurrencyController } from './currency/currency.controller';
import { TagController } from './tag/tag.controller';
import { TagService } from './tag/tag.service';
import { AppConfigService } from './appConfig/appConfig.service';
import { AppConfigController } from './appConfig/appConfig.controller';
import { BranchOfficeController } from './branchOffice/branchOffice.controller';
import { BranchOfficeService } from './branchOffice/branchOffice.service';
import { AuthModule } from '../auth/auth.module';
import { EntityModule } from '@retail/common/src/database/database.module';
import { DollarPrice } from '../../database/models/VAD10/dollarPrice/dollarPrice.entity';
import { Category } from '../../database/models/VAD10/category/category.entity';
import { Currency } from '../../database/models/VAD10/currency/currency.entity';
import { CurrencyHistory } from '../../database/models/VAD10/currencyHistory/currencyHistory.entity';
import { Tag } from '../../database/models/VAD10/tag/tag.entity';
import { Product } from '../../database/models/VAD10/exProduct/product.entity';
import { TagProduct } from '../../database/models/VAD10/tagProduct/tagProduct.entity';
import { Config } from '../../database/models/VAD10/config/config.entity';
import { MaSucursales } from '../../database/models/VAD10/stellar/maSucursales/maSucursales.entity';

@Module({
    imports: [
        EntityModule.forFeature(
        [   DollarPrice,
            Category,
            Currency,
            CurrencyHistory,
            Tag,
            Product,
            TagProduct,
            Config,
            MaSucursales,
        ]),
        ConfigModule,
        ServiceCommunicationModule
       
    ],
    controllers: [
        DollarPriceController,
        CategoryController,
        CurrencyController,
        TagController,
        AppConfigController,
        BranchOfficeController,
    ],
    providers: [
        DollarPriceService,
        CategoryService,
        CurrencyService,
        TagService,
        AppConfigService,
        BranchOfficeService
    ],
    exports: [
        DollarPriceService,
        CategoryService,
        CurrencyService,
        TagService,
        AppConfigService,
        BranchOfficeService
    ]
})
export class ParamsModule {    
}