import { DynamicModule, Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { loadConfig } from 'src/config'
import { PrismaModule, PrismaModuleConfig } from './prisma/prisma.module'

type BaseModuleForRootOptions = {
  prismaModuleConfig?: PrismaModuleConfig
}

const configModule = ConfigModule.forRoot({
  load: [() => loadConfig()],
  isGlobal: true,
})

@Global()
@Module({})
export class BaseModule {
  static forRoot({
    prismaModuleConfig,
  }: BaseModuleForRootOptions = {}): DynamicModule {
    return {
      module: BaseModule,
      imports: [configModule, PrismaModule.forRoot(prismaModuleConfig)],
    }
  }
}
