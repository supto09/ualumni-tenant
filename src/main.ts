import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class validator auto validate
  app.useGlobalPipes(new ValidationPipe());

  // enable DI for class-validator
  // this is an important step, for further steps in this article
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // enable cors
  app.enableCors();

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
