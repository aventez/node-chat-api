import { Schema } from 'mongoose';
import { Message } from '../interfaces/message.interface';

export const MessageSchema = new Schema<Message>({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true }
});