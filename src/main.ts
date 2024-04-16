import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { use } from 'passport';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));



  await app.listen(8000);
}
bootstrap();
