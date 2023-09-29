import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument, Types } from 'mongoose'
import { UserRole } from 'src/constant/enum/user.enum'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User {
  @ApiProperty()
  @Prop({ required: true })
  username: string

  @ApiProperty()
  @Prop()
  age: string

  @ApiProperty()
  @Prop({ required: true })
  password: string

  @ApiProperty()
  @Prop({ required: true })
  email: string

  @ApiProperty()
  @Prop({ required: true })
  phoneNumber: string

  @ApiProperty()
  @Prop({ required: true })
  type: UserRole

}

export const UserSchema = SchemaFactory.createForClass(User)

