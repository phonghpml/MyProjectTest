import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { UserRole } from 'src/constant/enum/user.enum'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  username: string

  @Prop()
  age: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  phoneNumber: string

  @Prop({ required: true })
  type: UserRole

}

export const UserSchema = SchemaFactory.createForClass(User)
