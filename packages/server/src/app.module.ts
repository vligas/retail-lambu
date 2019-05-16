import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
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
import { PruebaModule } from 'common/prueba/prueba.module';
import { PruebaService } from 'common/prueba/service/prueba.service';



@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UserModule,
    OdcModule,
    ParamsModule,
    ProductModule,
    ReportsModule,
    SpyModule,
    EtiquetaModule,
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
