import { Schema } from 'mongoose';
import { Message } from '../interfaces/message.interface';
import { MessageSchema } from './message.schema';

export const RoomSchema = new Schema<Message>({
    name: { type: String, required: true },
    messages: [MessageSchema],
    created: { type: Date, default: Date.now },
    lastUpdate: { type: Date, default: Date.now },
});