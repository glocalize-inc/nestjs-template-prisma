import { Test, TestingModule } from '@nestjs/testing'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'
import { CommonModule } from '../common'

describe('ApiController', () => {
  let appController: ApiController

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
      imports: [CommonModule],
    }).compile()

    appController = app.get<ApiController>(ApiController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
