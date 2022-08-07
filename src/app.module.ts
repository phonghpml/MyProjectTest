import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './Database/database.module'
import { UserModule } from './Module/User/user.module'

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
