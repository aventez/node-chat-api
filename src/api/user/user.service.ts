import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EncryptService } from 'src/services/encrypt/encrypt.service';
import { AuthRegisterDto } from '../auth/dto/auth.register.dto';
import { AuthUserDto } from '../auth/dto/auth.user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>, 
        private readonly encryptService: EncryptService
    ) {}

    async findOneByUsername(username: string): Promise<User | undefined> {
        return await this.userModel.findOne({ username })
    }

    async createUser(dto: AuthRegisterDto): Promise<User> {
        const encryptedPassword = await this.encryptService.hash(dto.password);
        const userPrototype = {
            username: dto.username,
            password: encryptedPassword, 
        };

        const user = await new this.userModel(userPrototype).save();
        return user;
    }
}
