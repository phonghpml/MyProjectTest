import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { User } from '../user/user.schema'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log(username)
    console.log(pass)
    const user: User = await this.userService.getUser(username)
    if (!user) {
      throw new Error('username is not correct')
    }
    if (user && user.password != pass) {
      throw new Error('password is not correct')
    }
    return user
  }

  async login(username: string, password: string) {
    try {
      const user = await this.validateUser(username, password)
      const payload = { username: username, sub: user._id }
      return {
        status: 'success',
        data: {
          access_token: this.jwtService.sign(payload)
        },
        message: null
      }
    } catch (error) {
      return {
        status: 'error',
        data: null,
        message: error.message
      }
    }
  }
}
