import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EncryptService } from 'src/services/encrypt/encrypt.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>, private readonly encryptService: EncryptService) {}

    async findOneByUsername(username: string): Promise<User | undefined> {
        return await this.userModel.findOne({ username })
    }
}
