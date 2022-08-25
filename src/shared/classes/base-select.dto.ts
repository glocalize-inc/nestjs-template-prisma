import { ApiPropertyOptional } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsOptional } from 'class-validator'
import { ISelectDto } from '../interfaces/select-dto.interface'

export abstract class BaseSelectDto<T> implements ISelectDto<T> {
  @IsOptional()
  @ApiPropertyOptional({ type: String, example: 'id,name' })
  @Transform((obj) => {
    switch (typeof obj.value) {
      case 'string':
        return obj.value.split(',')
      default:
        if (Array.isArray(obj.value)) return obj.value
        throw new Error('Invalid type')
    }
  })
  abstract selects?: Array<keyof T>

  /**
   * For prisma method
   */
  get select() {
    if (this.selects === undefined) return {}
    else {
      const select = {}
      for (const key of this.selects) {
        select[key as string] = true
      }
      return select
    }
  }
}
