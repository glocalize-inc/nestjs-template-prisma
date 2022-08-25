import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { ExampleService } from '../../example/example.service'

@Injectable()
export class ExampleSchedulerService {
  private logger = new Logger(ExampleSchedulerService.name)
  constructor(private exampleSchedulerService: ExampleService) {}

  @Cron('* * * * * *')
  async parseAll(): Promise<void> {
    this.logger.log(this.exampleSchedulerService.getHello())
  }
}
