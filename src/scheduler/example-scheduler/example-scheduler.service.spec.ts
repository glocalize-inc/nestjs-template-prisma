import { Test, TestingModule } from '@nestjs/testing'
import { ExampleSchedulerService } from './example-scheduler.service'

describe('KpiSchedulerService', () => {
  let service: ExampleSchedulerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleSchedulerService],
    }).compile()

    service = module.get<ExampleSchedulerService>(ExampleSchedulerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
