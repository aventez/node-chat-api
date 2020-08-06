import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.service';
import { UserSchema } from './schemas/user.schema';
import { EncryptModule } from 'src/services/encrypt/encrypt.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), EncryptModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
