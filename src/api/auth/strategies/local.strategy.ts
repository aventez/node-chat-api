import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../auth.service';
import { AuthUserDto } from '../dto/auth.user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<AuthUserDto> {
        const user = await this.authService.validateUser(username, password);
        if (!user) throw new UnauthorizedException('Authentication failed.');
        
        return user;
    }
}