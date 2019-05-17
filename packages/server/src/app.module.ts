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
import { AuthModule } from './features/auth/auth.module';
import { UserModule } from './features/userControl/user.module';
import { EtiquetaModule } from './features/tagVad20/etiqueta.module';
import { PruebaService } from '@retail/common';
import { PruebaModule } from '@retail/common';
import { DatabaseModule } from '@retail/common';
import { EntityModule } from './database/entity.module';
import { Role } from './database/models/VAD10/role/role.entity';


@Module({
  imports: [
    ConfigModule,
    DatabaseModule.forRoot([{
      token: 'VAD10',
      username: 'root',
      password: '123456',
      dialect: 'mssql',
      host: '127.0.0.1',
      logging: false,
      port: 3001,
      database: 'VAD10',
      benchmark: false,
      modelPaths: [__dirname + '/database/models/VAD10/**/*.entity.{ts,js}'],
      modelMatch: (filename, member) => {
          return filename.substring(0, filename.indexOf('.entity')).toLocaleLowerCase() === member.toLowerCase();
      },
    }]),
    //EntityModule.forFeature([Role]),/**Prueba de entity configurable */
    /*DatabaseModule,
    UserModule,
    OdcModule,
    ParamsModule,
    ProductModule,
    ReportsModule,
    SpyModule,
    EtiquetaModule,*/
    PruebaModule.forRoot('hola vale')
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(servicio: PruebaService) {
    servicio.log()
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
    consumer.apply(RequestContextMiddleware).forRoutes('/');
  }
}