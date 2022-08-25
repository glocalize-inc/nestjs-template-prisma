import { Module } from '@nestjs/common'
import { ExampleSchedulerService } from './example-scheduler.service'
import { ExampleModule } from '../../example/example.module'

@Module({
  imports: [ExampleModule],
  providers: [ExampleSchedulerService],
})
export class ExampleSchedulerModule {}
