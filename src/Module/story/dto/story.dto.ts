import { ApiProperty } from '@nestjs/swagger'

export class CreateStoryDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  author: string
  @ApiProperty()
  content: string
}
