import { Controller, Get } from '@nestjs/common'
import { ApiService } from './api.service'

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('healthz')
  healthz() {
    return 'OK'
  }
}
