import { Type } from 'class-transformer'
import { IsNumber, IsOptional } from 'class-validator'

export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  take?: number = 20
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  skip?: number = 0
}
