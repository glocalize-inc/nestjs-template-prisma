/**
 * 하기 모듈이 공통으로 의존하는 모듈을 여기에 추가한다.
 *
 * - ConsoleModule
 * - ApiModule
 * - SchedulerModule
 */
import { DynamicModule, Global, Module } from '@nestjs/common'
import { PrismaModule, PrismaModuleConfig } from './prisma/prisma.module'

export type CommonModuleParams = {
  prismaModuleConfig?: PrismaModuleConfig
}

@Global()
@Module({})
export class CommonModule {
  static forRoot({
    prismaModuleConfig,
  }: CommonModuleParams = {}): DynamicModule {
    return {
      module: CommonModule,
      imports: [PrismaModule.forRoot(prismaModuleConfig)],
    }
  }
}
