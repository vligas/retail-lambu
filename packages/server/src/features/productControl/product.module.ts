import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductControlController } from './product.controller';
import { EntityModule } from '@retail/common/src/database/database.module';
import { Product, TrOdc, MaOdc, MaProveedores, Tag, MaDepartamentos, MaGrupos, MaSubgrupos, Currency,  } from '../../database';
import { ConfigModule } from '@retail/common';

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