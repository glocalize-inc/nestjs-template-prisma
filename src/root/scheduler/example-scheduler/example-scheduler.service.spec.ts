import { Test, TestingModule } from '@nestjs/testing'
import { ExampleSchedulerService } from './example-scheduler.service'
import { ExampleModule } from '../../../example/example.module'

describe('KpiSchedulerService', () => {
  let service: ExampleSchedulerService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ExampleModule],
      providers: [ExampleSchedulerService],
    }).compile()

    service = module.get<ExampleSchedulerService>(ExampleSchedulerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
