import { Schema } from 'mongoose';
import { User } from '../interfaces/user.interface';

export const UserSchema = new Schema<User>({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: String
});