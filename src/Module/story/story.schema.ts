import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument, Types } from 'mongoose'
import { User } from '../user/user.schema'

export type StoryDocument = HydratedDocument<Story>

@Schema()
export class Story {
  @Prop({ required: true })
  name: string

  @Prop()
  content: string

  @Prop()
  isPublished: boolean

  @Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User
}

export const StorySchema = SchemaFactory.createForClass(Story)
