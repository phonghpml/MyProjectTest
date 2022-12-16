import { Body, Controller, Post, Get, Param } from '@nestjs/common'
import { CreateUserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.createOneUser(createUserDto)
  }
  @Get()
  getUsers() {
    return this.userService.getUsers()
  }
  @Get(':id')
  getDetailStory(@Param('id') id: string) {
    return this.userService.getDetailUser(id)
  }
}
