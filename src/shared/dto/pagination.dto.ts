import { ArgsType, Field } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { IsNumber, IsOptional } from 'class-validator'

@ArgsType()
export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Field({ nullable: true, defaultValue: 20 })
  take?: number = 20
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Field({ nullable: true, defaultValue: 0 })
  skip?: number = 0
}
