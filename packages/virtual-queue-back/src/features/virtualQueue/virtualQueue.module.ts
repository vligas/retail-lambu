import { Module } from '@nestjs/common';
import { ConfigModule } from '@retail/common';
import { EntityModule } from '@retail/common';
import { VirtualQueue} from 'src/database/models/virtualQueue/virtualQueue.entity';
import { VirtualQueueController } from './virtualQueue.controller';
import { VirtualQueueService } from './virtualQueue.service';
import { VirtualQueueGateway } from './virtualQueue.gateway';
import { Configuration } from '../../database/models/Configuration/configuration.entity';

@Module({
    imports: [
        EntityModule.forFeature([VirtualQueue]),
        ConfigModule,
    ],
    controllers: [VirtualQueueController],
    providers: [VirtualQueueService, VirtualQueueGateway],
    exports: [VirtualQueueService],
})
export class VirtualQueueModule { }
