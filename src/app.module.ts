import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ChatModule } from './api/chat/chat.module';

import appConfig from './config/app.config';
import databaseConfig from './config/db.config';
import authConfig from './config/auth.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig, databaseConfig, authConfig] }),
    DatabaseModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
