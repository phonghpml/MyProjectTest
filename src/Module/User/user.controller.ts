import { Controller, Post, Request } from '@nestjs/common'
import { UserService } from './user.service'

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Post('register')
  async register(@Request() req) {
    return this.userService.createOneUser(req.body)
  }
}
