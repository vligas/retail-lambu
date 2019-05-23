import { Injectable } from '@nestjs/common';
import { RequestLoginDto } from './auth.dto';
import { UserService } from '../userControl/user.service';
import { User } from 'src/database/models/VAD10/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwtPayload.interface';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async createToken(user: User) {
        const token = this.jwtService.sign({ username: user.login_name });
        return { token };
    }

    async checkCredentials(credentials: RequestLoginDto) {
        const user = await this.userService.getByUsername(credentials.username);
        if (!user || user.password !== credentials.password) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async validateUser(payload: JwtPayload): Promise<boolean | User> {
        if (payload && payload.username) {
            return (await this.userService.getByUsername(payload.username)).toJSON() as any;
        }
        return false;
    }

}