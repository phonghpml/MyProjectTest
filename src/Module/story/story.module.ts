import { Module } from '@nestjs/common'
import { StoryController } from './story.controller'
import { Story, StorySchema } from './story.schema'
import { StoryService } from './story.service'
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  providers: [StoryService],
  imports: [
    MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }])
  ],
  controllers: [StoryController],
  exports: [StoryService]
})
export class StoryModule {}
