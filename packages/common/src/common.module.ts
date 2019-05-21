import { Module, Global, HttpModule } from '@nestjs/common';

@Global()
@Module({
    imports: [HttpModule],
    exports: [HttpModule]
})
export class CommonModule {}