import { Injectable } from '@nestjs/common'
import { StoryInput } from './dto/story.dto'
import { Story, StoryDocument } from './story.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class StoryService {
  constructor(
    @InjectModel(Story.name) private storyModel: Model<StoryDocument>
  ) {}
  async getStory(name: string) {
    const story = await this.storyModel.findOne({
      where: {
        name: name
      }
    })
    return story
  }
  async createOneStory(story: StoryInput): Promise<Story> {
    const createUser = await this.storyModel.create(story)
    return createUser
  }
}
