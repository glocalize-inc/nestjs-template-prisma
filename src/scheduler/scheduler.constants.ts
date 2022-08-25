import { ExampleSchedulerService } from './example-scheduler/example-scheduler.service'

export const SCHEDULER_SERVICES = [ExampleSchedulerService.name] as const

type MainSchedulerConfig = {
  all?: boolean
  [key: typeof SCHEDULER_SERVICES[number]]:
    | boolean
    | { all?: boolean; [method: string]: boolean }
}

export const SCHEDULER_CONFIG: MainSchedulerConfig = {
  all: true,
  ExampleScheduleService: { all: true },
}
