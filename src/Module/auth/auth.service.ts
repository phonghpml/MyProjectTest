import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUser(username)
    console.log('user...............', user)
    if (user && user.password === pass) {
      throw new Error('user and password is not correct')
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
