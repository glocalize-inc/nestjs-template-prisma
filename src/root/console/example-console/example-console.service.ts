import { Injectable, Logger } from '@nestjs/common'
import { UnknownElementException } from '@nestjs/core/errors/exceptions/unknown-element.exception'
import { Command, Console } from 'nestjs-console'
import { ExampleService } from '../../../example/example.service'

type Verb = 'print-hello'

@Console()
@Injectable()
export class ExampleConsoleService {
  private logger = new Logger(ExampleConsoleService.name)

  constructor(private readonly exampleService: ExampleService) {}

  @Command({
    command: 'example <verb> [str]',
  })
  async kpi(verb: Verb, str?: string) {
    switch (verb) {
      case 'print-hello':
        console.log(this.exampleService.getHello(), str)
        return
      default:
        const error = new UnknownElementException(verb)
        this.logger.error(error)
        throw error
    }
  }
}
