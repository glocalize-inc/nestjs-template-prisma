import { DynamicModule, ForwardReference, Type } from '@nestjs/common'

export type PaginatedResult<T = any> = {
  data: T[]
  count: number
}
export type BetweenConditions = {
  end?: Date
  start?: Date
}

export type ModuleImportType =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference

export type Period = 'daily' | 'weekly' | 'monthly'
