import { Injectable } from '@nestjs/common'
import { CreateStoryDto } from './dto/story.dto'
import { Story, StoryDocument } from './story.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '../user/user.schema'
@Injectable()
export class StoryService {
  constructor(
    @InjectModel(Story.name) private storyModel: Model<StoryDocument>
  ) {}
  async getDetailStory(name: string) {
    const story = await this.storyModel.findOne({
      where: {
        name: name
      }
    })
    return story
  }
  async getStories() {
    return this.storyModel.find({}).populate('author')
  }
  async createOneStory(story: CreateStoryDto, userId: string): Promise<Story> {
    story.createdBy = userId
    console.log(story)
    return await this.storyModel.create(story)
  }
}
