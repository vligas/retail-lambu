import { Module, HttpModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from '../userControl/user.module';
import { AuthService } from './auth.service';
import { ConfigModule } from '@retail/common';
import { config } from 'src/config/config.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RoleService } from './role.service';
import { EntityModule } from '@retail/common/src/database/database.module';
import { Role } from '../../database/models/VAD10/role/role.entity';
import { Permission } from '../../database/models/VAD10/permission/permission.entity';


@Module({
    controllers: [AuthController],
    imports: [
        EntityModule.forFeature([
            Permission,
            Role
        ]),
        HttpModule,
        PassportModule.register({
            defaultStrategy: 'jwt'
        }),
        JwtModule.register({
            secretOrPrivateKey: config.get('APP_SECRET_KEY'),
            signOptions: {
                expiresIn: 3600,
            },
        }),
        UserModule,
        ConfigModule
    ],
    providers: [AuthService, JwtStrategy, RoleService],
    exports: [AuthService, JwtStrategy, RoleService]
})
export class AuthModule { }