import { ApiProperty, PickType } from '@nestjs/swagger'
import { UserRole } from 'src/constant/enum/user.enum'

export class CreateUserDto {
  @ApiProperty()
  username: string

  @ApiProperty()
  age: number

  @ApiProperty()
  password: string

  @ApiProperty()
  phoneNumber: string

  @ApiProperty({ type: () => UserRole, enum: UserRole, enumName: 'UserRole' })
  type: UserRole
}

export class LoginDto extends PickType(CreateUserDto, [
  'username',
  'password'
]) {}
