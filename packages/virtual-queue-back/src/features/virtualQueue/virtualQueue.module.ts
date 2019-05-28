import { Module } from '@nestjs/common';
import { ConfigModule } from '@retail/common';
import { EntityModule } from '../../database/entity.module';
import { VirtualQueue} from 'src/database/models/virtualQueue/virtualQueue.entity';
import { VirtualQueueController } from './virtualQueue.controller';
import { VirtualQueueService } from './virtualQueue.service';
import { VirtualQueueGateway } from './virtualQueue.gateway';

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
