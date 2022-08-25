import { ArgsType } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { IsDate, IsOptional } from 'class-validator'

@ArgsType()
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
