import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Request } from 'express'
import { CreateOneUserDto } from './dto/user.dto'
import { UserService } from './user.service'
import { User } from './user.schema'

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }
  @Post()
  @ApiOperation({ description: 'Create a user.' })
  @ApiCreatedResponse({
    description: 'The user has been successfully created.',
    type: User,
  })
  createOneUser(@Body() createOneUserDto: CreateOneUserDto) {
    return this.userService.createOneUser(createOneUserDto)
  }
  @Get()
  @ApiOperation({ description: 'Get all users' })
  @ApiOkResponse({
    description: 'The users were successfully obtained.',
    type: [User],
  })
  getUsers() {
    return this.userService.getUsers()
  }
  @Get(':id')
  @ApiOperation({
    description: 'Get a user by userId.',
  })
  @ApiOkResponse({
    description: 'The user was successfully obtained.',
    type: User,
  })
  getDetailUser(@Param('id') id: string) {
    return this.userService.getDetailUser(id)
  }
  @Get('me')
  @ApiOperation({
    description: 'Get a user current.',
  })
  @ApiOkResponse({
    description: 'The user was successfully obtained.',
    type: User,
  })
  getMe(@Req() request: Request) {
    return this.userService.getMe(request)
  }
}
