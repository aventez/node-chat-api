import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './interfaces/room.interface';
import { CreateRoomDto } from './dto/room.create.dto';

@Injectable()
export class RoomService {
    constructor(@InjectModel('Room') private readonly roomModel: Model<Room>) {}

    async findAll(): Promise<Room[]> {
        return await this.roomModel.find().exec();
    }

    async findOne(id: String): Promise<Room | null> {
        return await this.roomModel.findById(id).exec();
    }

    async create(payload: CreateRoomDto): Promise<Room> {
        const room = new this.roomModel(payload);
        return await room.save();
    }
  
    async delete(id: String): Promise<Room> {
        return this.roomModel.findByIdAndDelete(id).exec();
    }

    async update(id: String, payload: Room): Promise<Room> {
        return this.roomModel.findByIdAndUpdate(id, payload).exec();
    }
}
