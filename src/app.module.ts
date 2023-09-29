import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './module/auth/auth.module'
import { UserModule } from './module/user/user.module'
import { MongooseModule } from '@nestjs/mongoose'
import { StoryModule } from './module/story/story.module'
import { ScheduleModule } from '@nestjs/schedule'
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://cluster0.oasdw8b.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`,
      {
        ssl: true,
        sslValidate: true,
        sslKey: `${process.cwd()}/X509-cert-129352156445574575.pem`,
        sslCert: `${process.cwd()}/X509-cert-129352156445574575.pem`
      }
    ),
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
    StoryModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
