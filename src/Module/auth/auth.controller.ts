import { Controller, Post, Body, Get } from '@nestjs/common'
import { LoginDto } from '../user/dto/user.dto'
import { AuthService } from './auth.service'
import { getInfoUserDto } from './dto/auth.dto'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.username, loginDto.password)
  }
  @Post('user')
  async user(@Body() jwt: getInfoUserDto) {
    return this.authService.infoUser(jwt.jwt)
  }
}
