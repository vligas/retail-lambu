import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get('APP_PORT'));
}
bootstrap();
