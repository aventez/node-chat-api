import { Controller, UseGuards, Request, Post, Get, Req } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

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
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
