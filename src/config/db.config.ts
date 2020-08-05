import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 1000,
    name: process.env.DB_NAME || 'chatroom',
    user: process.env.DT_USER || 'chatroom-api',
    password: process.env.DB_PASSWORD || 'passwd'
}));