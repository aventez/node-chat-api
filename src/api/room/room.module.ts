import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './schemas/room.schema';
import { MessageSchema } from './schemas/message.schema';
import { RoomService } from './room.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }, { name: 'Message', schema: MessageSchema }])],
  providers: [RoomService],
  exports: [RoomService]
})
export class RoomModule {}
