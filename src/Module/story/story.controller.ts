import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
  Query,
  UseInterceptors,
  UploadedFile,
  Req
} from '@nestjs/common'
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger'
import { UserRole } from 'src/constant/enum/user.enum'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { Roles } from '../roles/roles.decorator'
import { CreateStoryDto } from './dto/story.dto'
import { StoryService } from './story.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { Express } from 'express'
@ApiBearerAuth()
@Controller('stories')
export class StoryController {
  constructor(private storyService: StoryService) {}
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

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadFile(@Request() req: any, @UploadedFile() file: Express.Multer.File) {

    const { user } = req

    console.log('adsssssssssssssssssssssssssssssssss', user)

    return {
      '1': "a"
    }
  }
  
}
