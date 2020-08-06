import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';

@Injectable()
export class AuthConfigService implements JwtOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createJwtOptions(): JwtModuleOptions {
        const secret = this.configService.get('auth.jwtSecret');
        const expiresIn = this.configService.get('auth.jwtExpiresIn');

        return {
            secret: secret,
            signOptions: { expiresIn: expiresIn },
        };
    }
}