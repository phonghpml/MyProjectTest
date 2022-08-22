import { Injectable } from '@nestjs/common'
import { User } from '../user/user.entity'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(public userRepository: UserRepository) {}
}
