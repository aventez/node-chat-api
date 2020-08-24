import { Document } from 'mongoose';
import { Message } from './message.interface';

export interface Room extends Document {
    name: String;
    messages?: Message[];
    created: Date;
    lastUpdate: Date;
}