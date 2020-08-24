import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './services/database/database.module';
import { UsersModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { ChatModule } from './api/chat/chat.module';

import appConfig from './config/app.config';
import databaseConfig from './config/db.config';
import authConfig from './config/auth.config';
import { EncryptModule } from './services/encrypt/encrypt.module';
import { RoomModule } from './api/room/room.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig, databaseConfig, authConfig] }),
    DatabaseModule,
    EncryptModule,
    AuthModule,
    UsersModule,
    RoomModule,
    ChatModule,
  ],
})
export class AppModule {}
