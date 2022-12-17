import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'
import { UserRole } from 'src/constant/enum/user.enum'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @ApiProperty()
  @Prop({ required: true })
  username: string

  @Prop()
  @ApiProperty()
  age: number

  @Prop({ required: true })
  @ApiProperty()
  password: string

  @Prop({ required: true })
  @ApiProperty()
  phoneNumber: string

  @Prop({ required: true })
  @ApiProperty()
  type: UserRole
}

export const UserSchema = SchemaFactory.createForClass(User)
