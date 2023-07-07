import { ApiProperty } from '@nestjs/swagger'
import mongoose from 'mongoose'

export class CreateStoryDto {
  @ApiProperty()
  name: string
  @ApiProperty({
    required: false
  })
  author?: string
  @ApiProperty()
  content: string

  createdBy: string
}
