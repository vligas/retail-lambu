import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserControlController } from './user.controller';
import { ConfigModule } from '@retail/common';
import { Role, Permission, MaSucursales, User} from '../../database';
import { EntityModule} from '@retail/common/src/database/database.module';

@Module({
    imports: [
        EntityModule.forFeature([User, Role, Permission, MaSucursales]),
        ConfigModule
    ],
    controllers: [UserControlController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule { }