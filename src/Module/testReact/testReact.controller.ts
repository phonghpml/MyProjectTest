import { Controller, Post, Request } from '@nestjs/common'
import { TestReactService } from './testReact.service'

@Controller()
export class TestReactController {
  constructor(private testReactService: TestReactService) {}
  @Post('updateStatus')
  async register(@Request() req) {
    return this.testReactService.testReact()
  }
}
