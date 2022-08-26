import { Logger, OnModuleDestroy, Optional } from '@nestjs/common'
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'
import { InjectPrismaLogLevel } from './prisma.injector'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(
    @Optional() @InjectPrismaLogLevel() logLevel?: Prisma.LogLevel[],
  ) {
    super(logLevel ? { errorFormat: 'pretty', log: logLevel } : undefined)
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async onModuleInit() {
    await this.$connect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      Logger.log('Terminate!')
      await app.close()
    })
  }
}
