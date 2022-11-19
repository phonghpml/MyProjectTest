import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Entity } from 'typeorm'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ required: true })
  username: string

  @Prop()
  age: number

  @Prop({ required: true })
  password: string

  @Prop({ required: true })
  phoneNumber: number
}

export const UserSchema = SchemaFactory.createForClass(User)
