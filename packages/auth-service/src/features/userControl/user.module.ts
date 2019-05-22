import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserControlController } from './user.controller';
import { ConfigModule } from '@retail/common';
import { EntityModule } from '../../database/entity.module';
import { Role } from 'src/database/models/VAD10/role/role.entity';
import { Permission } from 'src/database/models/VAD10/permission/permission.entity';
import { MaSucursales } from 'src/database/models/VAD10/stellar/maSucursales/maSucursales.entity';
import { User } from 'src/database/models/VAD10/user/user.entity'


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