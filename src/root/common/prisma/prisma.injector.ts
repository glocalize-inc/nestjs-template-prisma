import { Inject } from '@nestjs/common'
import { PRISMA_LOG_LEVEL } from './prisma.constants'

export function InjectPrismaLogLevel() {
  return Inject(PRISMA_LOG_LEVEL)
}
