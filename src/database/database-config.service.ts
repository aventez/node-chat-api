import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class DatabaseConfigService implements MongooseOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createMongooseOptions(): MongooseModuleOptions {
        const user = this.configService.get('database.user');
        const password = this.configService.get('database.password');
        const host = this.configService.get('database.host');
        const port = this.configService.get('database.port');
        const name = this.configService.get('database.name');

        //`mongodb://${user}:${password}@${host}:${port}/${name}`

        return {
            uri: `mongodb://${host}:${port}/${name}`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}