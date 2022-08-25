import { Logger } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { Command, Console } from 'nestjs-console'

@Console()
@Injectable()
export class ConsoleService {
  private logger = new Logger(ConsoleService.name)

  @Command({ command: 'hello' })
  getHello() {
    console.log('Hello World!')
    return
  }

  @Command({ command: 'throw-error-log-test' })
  throwTestErrorLog() {
    this.logger.error('Just test error log')
    return
  }
}
