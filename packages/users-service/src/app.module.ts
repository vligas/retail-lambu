import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { config } from './config/config.service';
import { EntityModule } from './database/entity.module';
import { DatabaseModule } from '@retail/common';

export const DATABASEVAD10 = 'DataBaseVAD10';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule.forRoot([{
      token: DATABASEVAD10,
      username: config.get('DB_USERNAME_VAD10'),
      password: config.get('DB_PASSWORD_VAD10'),
      dialect: 'mssql',
      host: config.get('DB_HOST_VAD10'),
      logging: false,
      // tslint:disable-next-line:ban
      port: parseInt(config.get('DB_PORT_VAD10'), 10),
      database: config.get('DB_NAME_VAD10'),
      benchmark: false,
      modelPaths: [__dirname + '/database/models/VAD10/**/*.entity.{ts,js}'],
      modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.entity')).toLocaleLowerCase() === member.toLowerCase();
      },
    }]),
   EntityModule.forFeature([]),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('/');
    // consumer.apply(RequestContextMiddleware).forRoutes('/');
  }
}