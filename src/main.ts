import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port: number = configService.get<number>('port');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Chatroom')
    .setDescription('REST API for chatroom')
    .setVersion('BETA')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/', app, document);

  // Add a route prefix
  app.setGlobalPrefix('api');
  app.enableCors();

  await app.listen(port);
}
bootstrap();
