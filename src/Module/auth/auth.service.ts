import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/user.entity'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: User = await this.userService.getUser(username)
    // console.log('user...............', user)
    if (!user) {
      return {
        status: 'error',
        data: null /* or optional error payload */,
        message: 'username is not correct'
      }
    }
    if (user && user.password != pass) {
      return {
        status: 'error',
        data: null /* or optional error payload */,
        message: 'password is not correct'
      }
    }
    return null
  }

  async login(username: string, password: string) {
    await this.validateUser(username, password)
    const payload = { username: username }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
