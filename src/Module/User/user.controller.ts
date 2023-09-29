import { Body, Controller, Post, Get, Param, Req } from '@nestjs/common'
import { CreateUserDto } from './dto/user.dto'
import { UserService } from './user.service'
import { Request } from 'express'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }
  @Post()
  async register(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto, 'createUserDto')
    return this.userService.createOneUser(createUserDto)
  }
  @Get()
  getUsers() {
    return this.userService.getUsers()
  }
  @Get(':id')
  getDetailUser(@Param('id') id: string) {
    return this.userService.getDetailUser(id)
  }
  @Get('me')
  getMe(@Req() request: Request) {
    return this.userService.getMe(request)
  }
}
