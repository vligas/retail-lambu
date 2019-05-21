import { Module } from '@nestjs/common';
import { HttpCommunicationService } from './services/http-communication.service';

@Module({
    imports: [],
    providers: [HttpCommunicationService],
    exports: [HttpCommunicationService]
})
export class ServiceCommunicationModule {}