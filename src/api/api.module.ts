import { DynamicModule, Module } from '@nestjs/common'
import { ModuleImportType } from 'src/shared/types'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'

type ApiModuleForRootOptions = {
  imports?: ModuleImportType[]
  controllers?: any[]
}

@Module({})
export class ApiModule {
  static forRoot({
    imports = [],
    controllers = [],
  }: ApiModuleForRootOptions = {}): DynamicModule {
    return {
      module: ApiModule,
      controllers: [ApiController, ...controllers],
      providers: [ApiService],
      imports,
    }
  }
}
