import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { Logger, ValidationPipe } from '@nestjs/common'
import { logger } from './middleware/logger.middleware'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
config()
const port = process.env.PORT

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule)
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('My Web')
      .setDescription('The api my web')
      .setVersion('1.0')
      .addTag('web')
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
    app.use(logger)
    app.enableCors()
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(port)
    Logger.log(`app running in port ${port}`)
  } catch (error) {
    Logger.log(`error start server`)
  }
}
bootstrap().catch
