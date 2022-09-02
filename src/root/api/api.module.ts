import { DynamicModule, Module } from '@nestjs/common'
import { ModuleImportType } from 'src/shared/types'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'
import { CommonModule, CommonModuleParams } from '../common/common.module'

type ApiModuleForRootOptions = {
  imports?: ModuleImportType[]
  controllers?: any[]
  commonModuleParams?: CommonModuleParams
}

@Module({})
export class ApiModule {
  static forRoot({
    imports = [],
    controllers = [],
    commonModuleParams,
  }: ApiModuleForRootOptions = {}): DynamicModule {
    return {
      module: ApiModule,
      controllers: [ApiController, ...controllers],
      providers: [ApiService],
      imports: [...imports, CommonModule.forRoot(commonModuleParams)],
    }
  }
}
