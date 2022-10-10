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
    return this.usersRepository.findOne({
      where: {
        username: username
      }
    })
  }
  async createOneUser(user: UserInput): Promise<User> {
    const createUser = this.usersRepository.create(user)
    return await this.usersRepository.save(createUser)
  }
}
