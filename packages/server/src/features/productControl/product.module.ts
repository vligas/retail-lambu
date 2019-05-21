import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductControlController } from './product.controller';
import { EntityModule } from '@retail/common/database/database.module';
import { Product } from '../../database/models/VAD10/exProduct/product.entity';
import { TrOdc } from 'src/database/models/VAD10/stellar/trOdc/trOdc.entity';
import { MaOdc } from '../../database/models/VAD10/stellar/maOdc/maOdc.entity';
import { MaProveedores } from '../../database/models/VAD10/stellar/maProveedores/maProveedores.entity';
import { Tag } from '../../database/models/VAD10/tag/tag.entity';
import { MaDepartamentos } from '../../database/models/VAD10/stellar/maDepartamentos/maDepartamentos.entity';
import { MaGrupos } from '../../database/models/VAD10/stellar/maGrupos/maGrupos.entity';
import { MaSubgrupos } from '../../database/models/VAD10/stellar/maSubgrupos/maSubgrupos.entity';
import { Currency } from '../../database/models/VAD10/currency/currency.entity';
import { ConfigModule } from 'src/config/config.module';

@Module({
    imports: [
    EntityModule.forFeature([
        TrOdc,
        Product,
        MaOdc, 
        MaProveedores,
        Tag, 
        MaDepartamentos,
        MaGrupos,
        MaSubgrupos,
        Currency,
    ]),
    ConfigModule
 ],
    controllers: [ProductControlController],
    providers: [ProductService],
    exports: [ProductService]
})
export class ProductModule { }