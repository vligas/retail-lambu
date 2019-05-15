import { Module } from '@nestjs/common';
import { OdcService } from './odc.service';
import { OdcControlController } from './odc.controller';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from 'src/config/config.module';


@Module({
    imports: [DatabaseModule, ConfigModule],
    controllers: [OdcControlController],
    providers: [OdcService],
    exports: [OdcService]
})
export class OdcModule {}