import { Injectable } from '@nestjs/common'
import { CreateStoryDto } from './dto/story.dto'
import { Story, StoryDocument } from './story.schema'
import { InjectModel } from '@nestjs/mongoose'
import mongoose, { Model } from 'mongoose'
@Injectable()
export class StoryService {
  constructor(
    @InjectModel(Story.name) private storyModel: Model<StoryDocument>
  ) { }
  async getDetailStory(name: string) {
    const story = await this.storyModel.findOne({
      where: {
        name: name
      }
    })
    return story
  }
  async getStories(query: any) {
    console.log(query)
    const pageNumber = +query.pageNumber || 0
    const limit = +query.limit || 12
    const result: {
      data?: any
      totalStory?: number
    } = {}
    const totalStory = await this.storyModel.countDocuments().exec()
    result.totalStory = totalStory
    let startIndex = pageNumber * limit
    result.data = await this.storyModel
      .find()
      .skip(startIndex)
      .limit(limit)
      .populate('author')
      .exec()

    return result
  }
  async createOneStory(story: CreateStoryDto, userId: string): Promise<Story> {
    story.createdBy = userId
    console.log(story)
    return await this.storyModel.create(story)
  }
}
