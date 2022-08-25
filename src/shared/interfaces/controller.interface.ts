import { PaginationDto } from '../dto/pagination.dto'
import { PaginatedResult } from '../types'

// TODO: any migration
export interface IFindAllController<Entity> {
  findAll(
    paginatedDto?: PaginationDto,
    user?: any,
  ): Promise<PaginatedResult<Entity>>
}

export interface IFindOneController<Entity> {
  findOne(parameters: Partial<Entity>, user?: any): Promise<Entity>
}

export interface IFindController<Entity>
  extends IFindAllController<Entity>,
    IFindOneController<Entity> {}
