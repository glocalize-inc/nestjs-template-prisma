import { Type } from 'class-transformer'
import { IsDate, IsOptional } from 'class-validator'

export class BetweenDateDto {
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  startDate?: Date
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  endDate?: Date
}
