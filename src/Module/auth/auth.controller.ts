import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './jwt-auth.guard'
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(JwtAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req?.username, req?.password)
  }
  // @Post('a')
  // async a(@Request() req) {
  //   console.log('assss')
  // }
}
