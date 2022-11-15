import { Controller, Post, Request } from '@nestjs/common'
import { StoryService } from './story.service'

@Controller()
export class StoryController {
  constructor(private storyService: StoryService) {}
  @Post('createOneStory')
  async register(@Request() req) {
    return this.storyService.createOneStory(req.body)
  }
}
