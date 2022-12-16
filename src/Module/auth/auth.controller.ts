import { Controller, Post, Body } from '@nestjs/common'
import { LoginDto } from '../user/dto/user.dto'
import { AuthService } from './auth.service'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.username, loginDto.password)
  }
}
