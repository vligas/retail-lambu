import { Module, NestModule, MiddlewareConsumer, Inject } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
//import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { OdcModule } from './features/odcControl/odc.module';
import { ParamsModule } from './features/params/params.module';
import { ReportsModule } from './features/reports/reports.module';
import { SpyModule } from './features/spy/spy.module';
import { RequestContextMiddleware } from './common/middlewares/request-context.middleware';
import { ProductModule } from './features/productControl/product.module';
import { UserModule } from './features/userControl/user.module';
import { PruebaService, ServiceDiscoveryModule } from '@retail/common';
import { PruebaModule } from '@retail/common';
import { DatabaseModule } from '@retail/common';
import { EntityModule } from './database/entity.module';
import { Role } from './database/models/VAD10/role/role.entity';
import { config } from '../src/config/config.service';
import { ConsulService } from '@retail/common/discovery/services/consul.service';

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
    EntityModule.forFeature([Role]), /*Prueba de entity configurable */
    ServiceDiscoveryModule.forRoot({
      app: {
        name: 'retail',
        address: '127.0.0.1',
        port: 3000
      },
      consul: {
        address: '127.0.0.1',
        port: 8500
      }
    }),
    UserModule,
    OdcModule,
    ParamsModule,
    ProductModule,
    ReportsModule,
    SpyModule,
    PruebaModule.forFeature('hola vale')
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private consulService: ConsulService) {
  }

  async onModuleInit() {
    await this.consulService.register();
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
    consumer.apply(RequestContextMiddleware).forRoutes('/');
  }
}