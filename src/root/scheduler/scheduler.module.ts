import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { CommonModule, CommonModuleParams } from 'src/root/common/common.module'
import { ExampleSchedulerModule } from './example-scheduler/example-scheduler.module'

export type SchedulerModuleParams = { commonModuleParams?: CommonModuleParams }
@Module({})
export class SchedulerModule {
  static forRoot({ commonModuleParams }: SchedulerModuleParams = {}) {
    return {
      module: SchedulerModule,
      imports: [
        CommonModule.forRoot(commonModuleParams),
        ScheduleModule.forRoot(),
        ExampleSchedulerModule,
      ],
    }
  }
}
