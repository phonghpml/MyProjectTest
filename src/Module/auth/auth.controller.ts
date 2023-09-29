import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { LoginDto } from '../user/dto/user.dto'
import { AuthService } from './auth.service'
import { Request } from 'express'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.username, loginDto.password)
  }
  @Get('isLogin')
  async user(@Req() request: Request) {

    return this.authService.infoUser(request)
  }
}
