import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { User } from '../user/user.schema'

export type StoryDocument = HydratedDocument<Story>

@Schema()
export class Story {
  @Prop({ required: true })
  name: string

  @Prop()
  content: string

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User
}

export const StorySchema = SchemaFactory.createForClass(Story)
