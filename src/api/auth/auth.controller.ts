import { Controller, UseGuards, Request, Post, Get, Req, Body } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthLoginDto } from './dto/auth.login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @ApiResponse({ status: 201, description: 'User was authenticated correctly' })
    @ApiResponse({ status: 401, description: 'User authentication failed' })
    @ApiParam({ name: 'username', description: 'User unique username', type: 'string' })
    @ApiParam({ name: 'password', description: 'User password in plaintext', type: 'string' })
    @Post('login')
    async login(@Body() dto: AuthLoginDto) {
        return this.authService.login(dto);
    }

    @ApiResponse({ status: 201, description: 'User was created correctly' })
    @ApiResponse({ status: 401, description: 'Cannot create user' })
    @ApiParam({ name: 'username', description: 'User unique nickname', type: 'string' })
    @ApiParam({ name: 'password', description: 'User password in plaintext', type: 'string' })
    @Post('register')
    async register(@Body() dto: AuthRegisterDto) {
        return this.authService.register(dto);
    }
}
