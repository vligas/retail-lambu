import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../userControl/user.module';
import { AuthService } from './auth.service';
import { ConfigModule } from '@retail/common';
import { config } from 'src/config/config.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RoleService } from './role.service';


@Module({
    controllers: [AuthController],
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.register({
            secretOrPrivateKey: config.get('APP_SECRET_KEY'),
            signOptions: {
                expiresIn: 3600,
            },
        }),
        UserModule,
        ConfigModule,
    ],
    providers: [AuthService, JwtStrategy, RoleService],
    exports: [AuthService, JwtStrategy, RoleService]
})
export class AuthModule { }