import { DynamicModule, Module, Type } from '@nestjs/common'
import { ModuleImportType } from 'src/shared/types'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'
import { CommonModule } from '../common'

type ApiModuleForRootOptions = {
  imports?: ModuleImportType[]
  controllers?: any[]
  commonModule: Type<CommonModule>
}

@Module({})
export class ApiModule {
  static forRoot(
    {
      imports = [],
      controllers = [],
      commonModule,
    }: ApiModuleForRootOptions = { commonModule: CommonModule },
  ): DynamicModule {
    return {
      module: ApiModule,
      controllers: [ApiController, ...controllers],
      providers: [ApiService],
      imports: [...imports, commonModule],
    }
  }
}
