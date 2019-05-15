import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserControlController } from './user.controller';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from 'src/config/config.module';
import { AuthModule } from '../auth/auth.module';


@Module({
    imports: [DatabaseModule, ConfigModule],
    controllers: [UserControlController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule { }