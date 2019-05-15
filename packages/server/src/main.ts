import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformResponseInterceptor } from './common/interceptors/transformResponse.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as MssqlDriver from 'sequelize/lib/dialects/mssql';
import { CurrencyInterceptor } from './common/interceptors/currency.interceptor';
import { config } from './config/config.service';
//MssqlDriver.prototype.supports = { ...MssqlDriver.prototype.supports, returnValues: { output: false } };

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // app.useGlobalPipes(new ValidationPipe({
  //   transform: true,
  //   whitelist: true
  // }));

  app.useGlobalInterceptors(new TransformResponseInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Documentacion - API RETAIL 🙈 ')
    .setVersion('1.0')
    .addTag('retail')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);


  await app.listen(config.get('APP_PORT'), '0.0.0.0');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
