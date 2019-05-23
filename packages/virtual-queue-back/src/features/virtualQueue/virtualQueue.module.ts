import { Module } from '@nestjs/common';
import { ConfigModule } from '@retail/common';
import { EntityModule } from '../../database/entity.module';
import { VirtualQueue} from 'src/database/models/virtualQueue/virtualQueue.entity';
import { VirtualQueueController } from './virtualQueue.controller';
import { VirtualQueueService } from './virtualQueue.service';

@Module({
    imports: [
        EntityModule.forFeature([VirtualQueue]),
        ConfigModule,
    ],
    controllers: [VirtualQueueController],
    providers: [VirtualQueueService],
    exports: [VirtualQueueService],
})
export class VirtualQueueModule { }
