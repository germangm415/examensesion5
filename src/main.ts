import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

app.enableCors();

const options = new DocumentBuilder()
  .setTitle('Catalogo API')
  .setDescription('Este API se utiliza para el examen de la sesion 5')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-catalogo', app, document);

  await app.listen(3000);
}

bootstrap();
