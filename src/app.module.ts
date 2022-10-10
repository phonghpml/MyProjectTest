import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './module/auth/auth.module'
import { UserModule } from './module/user/user.module'
import { configData } from './config/data/database.config'

@Module({
  imports: [TypeOrmModule.forRoot(configData), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
