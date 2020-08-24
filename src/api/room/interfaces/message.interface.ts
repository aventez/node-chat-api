import { Document } from 'mongoose';
import { User } from 'src/api/user/interfaces/user.interface';

export interface Message extends Document {
    content: String;
    user: User;
    date: Date;
}