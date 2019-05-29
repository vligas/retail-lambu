import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConsulService, DatabaseModule, ServiceDiscoveryModule } from '@retail/common';
import { VirtualQueueModule } from './features/virtualQueue/virtualQueue.module';
import { VIRTUAL_QUEUE_NAME } from '@retail/common/src/utils/constants';
import { config } from '@retail/common/src/config/config.service';
import { EventsModule } from './features/socket.io/events/event.module';

export const DATABASEVAD10 = 'DataBaseVAD10';

@Module({
  imports: [
    ConfigModule.forRoot(`./src/config/enviroments/${process.env.NODE_ENV || 'development'}.env`),    
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
        modelPaths: [__dirname + '/database/models/**/*.entity.{ts,js}'],
        modelMatch: (filename, member) => {
          return filename.substring(0, filename.indexOf('.entity')).toLocaleLowerCase() === member.toLowerCase();
        },
      },
    ]),

    ServiceDiscoveryModule.forRoot({
      app: {
        name: VIRTUAL_QUEUE_NAME,
        address: '127.0.0.1',
        port: parseInt(config.get('APP_PORT')),
      },
      consul: {
        address: '127.0.0.1',
        port: 8500,
      },
      discover: [],
    }),
    VirtualQueueModule,
    EventsModule
  ],
  controllers: [],
  providers: [],
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
