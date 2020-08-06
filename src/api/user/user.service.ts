import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { USER_MOCKS } from './constants/user.mocks';

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = USER_MOCKS;
    }

    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
