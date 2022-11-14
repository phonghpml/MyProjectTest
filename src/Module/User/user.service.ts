import { Injectable } from '@nestjs/common'
import { UserInput } from './dto/user.dto'
import { User, UserDocument } from './user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async getUser(username: string) {
    const user = await this.userModel.findOne({
      where: {
        name: username
      }
    })
    return user
  }
  async createOneUser(user: UserInput): Promise<User> {
    const createUser = await this.userModel.create(user)
    return createUser
  }
}
