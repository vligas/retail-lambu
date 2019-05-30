import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import { logger } from '@retail/common';
import { config } from '@retail/common/src/config/config.service';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  app.enableCors();
  app.use('/public', express.static(path.join(__dirname, '/public')));
  await app.listen(config.get('APP_PORT'));
  logger.info(`app listen on http://localhost:${config.get('APP_PORT')}`);
}
bootstrap();
