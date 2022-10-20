import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { Logger } from '@nestjs/common'
import { logger } from './middleware/logger.middleware'
config()
const port = process.env.PORT

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule)
    app.use(logger)
    app.enableCors()
    await app.listen(port)
    Logger.log(`app running in port ${port}`)
  } catch (error) {
    Logger.log(`error start server`)
  }
}
bootstrap().catch
