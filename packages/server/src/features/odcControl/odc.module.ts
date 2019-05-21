import { Module } from '@nestjs/common';
import { OdcService } from './odc.service';
import { OdcControlController } from './odc.controller';
import { ConfigModule } from 'src/config/config.module';
import { EntityModule } from '@retail/common/database/database.module';
import { ExOdc } from 'src/database/models/VAD10/exOdc/exOdc.entity';


@Module({
    imports: [
        EntityModule.forFeature([ExOdc]),
        ConfigModule],
    controllers: [OdcControlController],
    providers: [OdcService],
    exports: [OdcService]
})
export class OdcModule {}