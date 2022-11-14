import { Repository } from 'typeorm'
import { User } from './user.schema'

export class UserRepository extends Repository<User> {}
