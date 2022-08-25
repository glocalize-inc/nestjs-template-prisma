import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { BaseModule } from 'src/base/base.module'
import { ExampleSchedulerModule } from './example-scheduler/example-scheduler.module'

@Module({
  imports: [
    BaseModule.forRoot(),
    ScheduleModule.forRoot(),
    ExampleSchedulerModule,
  ],
})
export class SchedulerModule {}
