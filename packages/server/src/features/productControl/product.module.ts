import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductControlController } from './product.controller';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from 'src/config/config.module';
import { AuthModule } from '../auth/auth.module';


@Module({
    imports: [DatabaseModule, ConfigModule, AuthModule],
    controllers: [ProductControlController],
    providers: [ProductService],
    exports: [ProductService]
})
export class ProductModule { }