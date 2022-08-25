import { HttpStatus } from '@nestjs/common'

export interface IErrorResponse {
  statusCode: HttpStatus
  message: string
  error: string
  name: string
}
