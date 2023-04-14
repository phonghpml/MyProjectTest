import { Module } from '@nestjs/common'
import { TestReactController } from './testReact.controller'
import { TestReactService } from './testReact.service'

@Module({
  providers: [TestReactService],
  imports: [],
  controllers: [TestReactController],
  exports: [TestReactService]
})
export class TestReactModule {}
