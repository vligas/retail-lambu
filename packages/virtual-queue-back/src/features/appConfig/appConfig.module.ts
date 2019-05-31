import { Module } from '@nestjs/common';
import { ConfigModule } from '@retail/common';
import { EntityModule } from '@retail/common';
import { Config } from '../../database/models/configuration/config.entity';
import { AppConfigController } from './appConfig.controller';
import { AppConfigService } from './appConfig.service';

@Module({
    imports: [
        EntityModule.forFeature([Config]),
        ConfigModule,
    ],
    controllers: [AppConfigController],
    providers: [AppConfigService],
    exports: [AppConfigService],
})
export class AppConfigModule { }
