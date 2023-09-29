import { ApiProperty, PickType } from '@nestjs/swagger'
import { UserRole } from 'src/constant/enum/user.enum'

export class CreateOneUserDto {
  @ApiProperty()
  username: string

  @ApiProperty()
  age: string

  @ApiProperty()
  password: string

  @ApiProperty()
  phoneNumber: string

  @ApiProperty()
  email: string

  @ApiProperty({ type: () => UserRole, enum: UserRole, enumName: 'UserRole' })
  type: UserRole
}

export class LoginDto extends PickType(CreateOneUserDto, [
  'username',
  'password'
]) { }



