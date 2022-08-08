import { Controller, Post, UseGuards } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
