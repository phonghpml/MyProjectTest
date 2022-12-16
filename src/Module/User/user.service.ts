import { Injectable } from '@nestjs/common'
import { User, UserDocument } from './user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/user.dto'
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
  async getDetailUser(id: string) {
    const user = await this.userModel.findOne({
      where: {
        id: id
      }
    })
    return user
  }
  async getUsers() {
    return this.userModel.find({})
  }
  async createOneUser(user: CreateUserDto): Promise<User> {
    const createUser = await this.userModel.create(user)
    return createUser
  }
}
