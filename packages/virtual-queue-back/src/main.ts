import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from '@retail/common/src/config/config.service';
import { logger } from '@retail/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get('APP_PORT'));
  logger.info(`app listen on http://localhost:${config.get('APP_PORT')}`);
}
bootstrap();
