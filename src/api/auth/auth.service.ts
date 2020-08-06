import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EncryptService } from 'src/services/encrypt/encrypt.service';
import { AuthUserDto } from './dto/auth.user.dto';
import { UsersService } from '../user/user.service';
import { AuthRegisterDto } from './dto/auth.register.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private encryptService: EncryptService,
    ) {}

    async validateUser(username: string, password: string): Promise<AuthUserDto | null> {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const success = await this.encryptService.compare(password, user.password);
            if (success) {
                const { password, ...result } = user;
                return result;
            }
        }

        return null;
    }

    async login(user: AuthUserDto) {
        const payload = { username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(dto: AuthRegisterDto): Promise<any> {
        const user = await this.usersService.findOneByUsername(dto.username);
        if (user !== null) throw new UnauthorizedException('User with entered nickname already exists.');

        const result = await this.usersService.createUser(dto);

        return {
            success: true,
            username: result.username,
        };
    }
}
