import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { Logger } from '@nestjs/common'

config()
const port = process.env.PORT
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule)
    await app.listen(port)
    Logger.log(`app running in port ${port}`)
  } catch (error) {
    Logger.log(`error start server`)
  }
}
bootstrap().catch
