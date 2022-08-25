import { Global } from '@nestjs/common'
import { ValueProvider } from '@nestjs/common'
import { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PRISMA_LOG_LEVEL } from './prisma.constants'
import { PrismaService } from './prisma.service'

const defaultPrismaLogLevel: Array<Prisma.LogLevel> = [
  'query',
  'info',
  'warn',
  'error',
]

export type PrismaModuleConfig = {
  logLevel?: Prisma.LogLevel[]
}

@Global()
@Module({})
export class PrismaModule {
  static forRoot(config?: PrismaModuleConfig): DynamicModule {
    return {
      module: PrismaModule,
      providers: [
        PrismaService,
        {
          provide: PRISMA_LOG_LEVEL,
          useValue: config?.logLevel || defaultPrismaLogLevel,
        } as ValueProvider<Prisma.LogLevel[]>,
      ],
      exports: [PrismaService],
      global: true,
    }
  }
}
