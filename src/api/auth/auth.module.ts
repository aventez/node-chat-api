import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../user/user.module';
import { AuthConfigService } from './auth-config.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { EncryptModule } from 'src/services/encrypt/encrypt.module';

@Module({
    imports: [
        UsersModule, 
        PassportModule,
        EncryptModule,
        JwtModule.registerAsync({ useClass: AuthConfigService }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}