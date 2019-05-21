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
import { EntityModule } from '@retail/common/src/database/database.module';
import { DollarPrice, Category, Currency, CurrencyHistory, Tag, Product, TagProduct, Config, MaSucursales  } from '../../database';

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