import { Module } from '@nestjs/common'
import { ExampleConsoleService } from './example-console.service'
import { ExampleModule } from '../../example/example.module'

@Module({
  imports: [ExampleModule],
  providers: [ExampleConsoleService],
})
export class ExampleConsoleModule {}
