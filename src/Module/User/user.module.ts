import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { User, UserSchema } from './user.schema'
import { UserService } from './user.service'
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  providers: [UserService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
