import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from '@retail/common';
import { config } from '@retail/common/src/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get('APP_PORT'));
  logger.info(`app listen on http://localhost:${config.get('APP_PORT')}`);
}
bootstrap();
