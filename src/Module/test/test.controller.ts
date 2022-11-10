import { Controller, Post, Request } from '@nestjs/common'
import { TestService } from './test.service'

@Controller()
export class TestController {
  constructor(private testService: TestService) {}
  @Post('testExcel')
  async register(@Request() req) {
    return this.testService.testImageExcel()
  }
}
