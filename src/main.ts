import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('main');
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Microservice Instance 1')
    .setDescription('The Microservice 1 API description')
    .setVersion('1.0')
    .addTag('Microservice 1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT);
  logger.debug(`Server Running on Port: ${PORT}`);
}
bootstrap();
