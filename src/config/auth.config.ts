import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
    jwtSecret: process.env.JWT_SECRET || 'secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '60s',
}));