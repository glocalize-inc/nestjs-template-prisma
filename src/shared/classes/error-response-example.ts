import { HttpStatus } from '@nestjs/common'
import { IErrorResponse } from '../interfaces/error-response.interface'

export class ErrorResponseExample implements IErrorResponse {
  public statusCode: HttpStatus
  public message: string
  public error: string
  public name: string
  constructor(obj: IErrorResponse)
  constructor(
    statusCode: HttpStatus,
    message: string,
    error: string,
    name: string,
  )
  constructor(p1, message?, error?, name?) {
    if (message && error && name) {
      this.statusCode = p1
      this.message = message
      this.error = error
      this.name = name
    } else {
      this.statusCode = p1.statusCode
      this.message = p1.message
      this.error = p1.error
      this.name = p1.name
    }
  }
}
