import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EncryptService } from 'src/services/encrypt/encrypt.service';
import { AuthUserDto } from './dto/auth.user.dto';
import { UsersService } from '../user/user.service';

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
}
