import { Module } from '@nestjs/common'
import { CommonModule } from 'src/root/common/common.module'
import { ExampleConsoleModule } from './example-console/example-console.module'
import { ConsoleService } from './console.service'
import { ConsoleModule as NestjsConsoleModule } from 'nestjs-console'

@Module({
  imports: [NestjsConsoleModule, CommonModule.forRoot(), ExampleConsoleModule],
  providers: [ConsoleService],
})
export class ConsoleModule {}
