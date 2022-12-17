import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request
} from '@nestjs/common'
import { ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { User } from '../user/user.schema'
import { CreateStoryDto } from './dto/story.dto'
import { StoryService } from './story.service'
@ApiBearerAuth()
@Controller('stories')
export class StoryController {
  constructor(private storyService: StoryService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async createStory(@Body() storyDto: CreateStoryDto, @Request() req: any) {
    return this.storyService.createOneStory(storyDto, req.user?.username)
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
