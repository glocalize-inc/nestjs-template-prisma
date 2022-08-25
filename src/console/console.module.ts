import { Module } from '@nestjs/common'
import { BaseModule } from 'src/base/base.module'
import { ExampleConsoleModule } from './example-console/example-console.module'
import { ConsoleService } from './console.service'
import { ConsoleModule as NestjsConsoleModule } from 'nestjs-console'

@Module({
  imports: [NestjsConsoleModule, BaseModule.forRoot(), ExampleConsoleModule],
  providers: [ConsoleService],
})
export class ConsoleModule {}
