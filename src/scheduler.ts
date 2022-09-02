import { SchedulerModule } from './root/scheduler/scheduler.module'
import { schedulerBootstrap } from './shared/scheduler-bootstrap'

schedulerBootstrap(SchedulerModule.forRoot())
