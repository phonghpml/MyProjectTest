import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './module/auth/auth.module'
import { UserModule } from './module/user/user.module'
import { TestModule } from './module/test/test.module'
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [
    // TypeOrmModule.forRoot(configData),
    MongooseModule.forRoot(
      `mongodb+srv://cluster0.r52erkw.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`,
      {
        ssl: true,
        sslValidate: true,
        sslKey: `${process.cwd()}/X509-cert-5956132687475728034.pem`,
        sslCert: `${process.cwd()}/X509-cert-5956132687475728034.pem`
      }
    ),
    UserModule,
    AuthModule,
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
