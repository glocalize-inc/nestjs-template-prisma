import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { SchedulerModule } from './root/scheduler/scheduler.module'

async function bootstrap() {
  const app = await NestFactory.create(
    SchedulerModule.forRoot(),
    new FastifyAdapter(),
  )
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
