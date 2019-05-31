
import 'reflect-metadata';


export {
    DatabaseModule,
    EntityModule
} from './src/database/database.module';

export {
    PermissionsGuard,
} from './src/guards/permissions.guard';

export * from './src/discovery';
export * from './src/service-communication';

export * from './src/utils';

export {
    ConfigModule,
} from './src/config/config.module';

export { CommonModule } from './src/common.module';