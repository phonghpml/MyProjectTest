import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { User } from '../user/user.schema'
import { CreateStoryDto } from './dto/story.dto'
import { StoryService } from './story.service'
@ApiBearerAuth()
@Controller('stories')
export class StoryController {
  constructor(private storyService: StoryService) {}
  // @UseGuards(JwtAuthGuard)
  @Post()
  async createStory(@Body() storyDto: CreateStoryDto, @Body() user: User) {
    return this.storyService.createOneStory(storyDto, user)
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getStories() {
    return this.storyService.getStories()
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getDetailStory(@Param('id') id: string) {
    return this.storyService.getDetailStory(id)
  }
}
