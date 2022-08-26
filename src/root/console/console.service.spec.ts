import { Test, TestingModule } from '@nestjs/testing'
import { ConsoleService } from './console.service'
import { ConsoleModule as NestjsConsoleModule } from 'nestjs-console/dist/module'
import { CommonModule } from '../common'
import { ExampleConsoleModule } from './example-console/example-console.module'

describe('ConsoleService', () => {
  let service: ConsoleService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        NestjsConsoleModule,
        CommonModule.forRoot(),
        ExampleConsoleModule,
      ],
      providers: [ConsoleService],
    }).compile()

    service = module.get<ConsoleService>(ConsoleService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
