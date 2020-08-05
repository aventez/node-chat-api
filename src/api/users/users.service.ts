import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'test',
                password: 'qwerty',
            },
        ];
    }

    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
