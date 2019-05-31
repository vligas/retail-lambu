import { Module } from '@nestjs/common';
import { ConfigModule } from '@retail/common';
import { EntityModule } from '@retail/common';
import { Configuration } from '../../database/models/Configuration/configuration.entity';
import { AppConfigController } from './appConfig.controller';
import { AppConfigService } from './appConfig.service';

@Module({
    imports: [
        EntityModule.forFeature([Configuration]),
        ConfigModule,
    ],
    controllers: [AppConfigController],
    providers: [AppConfigService],
    exports: [AppConfigService],
})
export class AppConfigModule { }
