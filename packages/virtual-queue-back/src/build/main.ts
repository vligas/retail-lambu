import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

// tslint:disable-next-line:no-any
export async function bootstrap(token ?: any) {
    const app = await NestFactory.create(AppModule, {
        logger: false,
    });
    if (!!token) {
        return app.get(token);
    } else {
        return app;
    }
}
// bootstrap();
