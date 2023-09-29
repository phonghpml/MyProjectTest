import { Body, Controller, Post, Get, Param, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { Request } from 'express'
import { CreateOneUserDto } from './dto/user.dto'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }
  @Post()
  createOneUser(@Body() createOneUserDto: CreateOneUserDto) {
    return this.userService.createOneUser(createOneUserDto)
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
