import { Module } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { EtiquetaControlController } from './etiqueta.controller';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from 'src/config/config.module';
import { AuthModule } from '../auth/auth.module';


@Module({
    imports: [DatabaseModule, ConfigModule, AuthModule],
    controllers: [EtiquetaControlController],
    providers: [EtiquetaService],
    exports: [EtiquetaService]
})
export class EtiquetaModule { }