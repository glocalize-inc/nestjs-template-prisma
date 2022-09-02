import { DynamicModule, INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'

export async function schedulerBootstrap(module: DynamicModule) {
  const app: INestApplication = await NestFactory.create(
    module,
    new FastifyAdapter(),
  )
  await app.listen(process.env.PORT || 3000)
}
