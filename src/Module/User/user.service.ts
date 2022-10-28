import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserInput } from './dto/user.dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  async getUser(username: string) {
    const user = await this.usersRepository.findOne({
      where: {
        username: username
      }
    })
    return user
  }
  async createOneUser(user: UserInput): Promise<User> {
    const createUser = this.usersRepository.create(user)
    return await this.usersRepository.save(createUser)
  }
}
