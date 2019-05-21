import { Module, NestModule, MiddlewareConsumer, Inject, OnModuleInit } from '@nestjs/common';
//import { ConfigModule } from './config/config.module';
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
<<<<<<< HEAD
import { AUTH_SERVICE_NAME, RETAIL_SERVICE_NAME } from '@retail/common/utils/constants';
=======
import { AUTH_SERVICE_NAME } from '@retail/common/utils/constants';
import { ConfigModule } from '@retail/common';
>>>>>>> 122801ce06ac7fc26b76db49521a882a2235a641

export const DATABASEVAD10 = 'DataBaseVAD10';

@Module({
  imports: [
    ConfigModule.forRoot(`./src/config/enviroments/${process.env.NODE_ENV || 'development'}.env`),
    
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
    ServiceDiscoveryModule.forRoot({
      app: {
        name: RETAIL_SERVICE_NAME,
        address: '127.0.0.1',
        port: 3000
      },
      consul: {
        address: '127.0.0.1',
        port: 8500
      },
      discover: [AUTH_SERVICE_NAME]
    }),
    UserModule,
    //OdcModule,
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