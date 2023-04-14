import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type IsUniqueDocument = HydratedDocument<IsUnique>

@Schema()
export class IsUnique {
  @Prop({ required: true })
  isUnique: string
}

export const StorySchema = SchemaFactory.createForClass(IsUnique)
