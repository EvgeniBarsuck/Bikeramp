import { config } from '@config/app/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { description, enabled, path, title, version } = config.swagger;

  if (enabled) {
    const options = new DocumentBuilder()
      .setTitle(title || 'Bikeramp API')
      .setDescription(description || 'The bikeramp description')
      .setVersion(version || '1.0')
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(path || 'api', app, document);
  }

  await app.listen(3000);
}

bootstrap();
