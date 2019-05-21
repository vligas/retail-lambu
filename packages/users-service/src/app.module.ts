import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { config } from './config/config.service';
import { DatabaseModule, ServiceDiscoveryModule } from '@retail/common';
import { AUTH_SERVICE_NAME } from '@retail/common/src/utils/constants';
import { UserModule } from './features/userControl/user.module';
import { AuthModule } from './features/auth/auth.module';
import { ConsulService } from '@retail/common/src/discovery/services/consul.service';

export const DATABASEVAD10 = 'DataBaseVAD10';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule.forRoot([
      {
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
      },
    ]),

    ServiceDiscoveryModule.forRoot({
      app: {
        name: AUTH_SERVICE_NAME,
        address: '127.0.0.1',
        port: 3001,
      },
      consul: {
        address: '127.0.0.1',
        port: 8500,
      },
      discover: [],
    }),

    /// modules
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  constructor(private consulService: ConsulService) {}

  async onModuleInit() {
    await this.consulService.register();
  }

  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('/');
    // consumer.apply(RequestContextMiddleware).forRoutes('/');
  }
}
