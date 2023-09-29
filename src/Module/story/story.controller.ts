import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  UseGuards
} from '@nestjs/common'
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateStoryDto } from './dto/story.dto'
import { StoryService } from './story.service'
@ApiBearerAuth()
@ApiTags('stories')
@Controller('stories')
export class StoryController {
  constructor(private storyService: StoryService) { }
  @UseGuards(JwtAuthGuard)
  @Post()
  // @Roles(UserRole.Admin)
  async createStory(@Body() storyDto: CreateStoryDto, @Request() req: any) {
    console.log(req.user)
    return this.storyService.createOneStory(storyDto, req.user?.userId)
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiQuery({ name: 'pageNumber' })
  @ApiQuery({ name: 'limit' })
  getStories(@Query() query: any) {
    return this.storyService.getStories(query)
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getDetailStory(@Param('id') id: string) {
    return this.storyService.getDetailStory(id)
  }
}
