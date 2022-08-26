import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { CommonModule } from 'src/root/common/common.module'
import { ExampleSchedulerModule } from './example-scheduler/example-scheduler.module'

@Module({})
export class SchedulerModule {
  static forRoot() {
    return {
      module: SchedulerModule,
      imports: [
        CommonModule.forRoot(),
        ScheduleModule.forRoot(),
        ExampleSchedulerModule,
      ],
    }
  }
}
