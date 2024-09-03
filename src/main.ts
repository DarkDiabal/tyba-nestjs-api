import './config/env/env.config';
import { NestFactory } from '@nestjs/core';
import { TybaServiceModule } from './tyba-service.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(TybaServiceModule);

  const config = new DocumentBuilder()
    .setTitle('tyba API')
    .setDescription('Service to tyba')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.TYBA_SERVICE_PORT || 3000);
}
bootstrap();
