import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    switch (exception.constructor.name) {
      case 'NotFoundError':
      case 'EntityNotFoundError':
        super.catch(
          new NotFoundException({
            statusCode: 404,
            message: exception.message,
            error: 'Not found',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'SubtaskAlreadySubmittedError':
        super.catch(
          new BadRequestException({
            statusCode: 400,
            message: exception.message,
            error: 'Bad request',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'AlreadySubmittedSubtaskError':
        super.catch(
          new BadRequestException({
            statusCode: 400,
            message: exception.message,
            error: 'Bad request',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'PermissionDeniedError':
        super.catch(
          new ForbiddenException({
            statusCode: 403,
            message: exception.message,
            error: 'Forbidden',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'EntityAlreadyExistError':
        super.catch(
          new BadRequestException({
            statusCode: 400,
            message: exception.message,
            error: 'Bad request',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'LanguageRuleError':
        super.catch(
          new BadRequestException({
            statusCode: 400,
            message: exception.message,
            error: 'Bad request',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'MaximumNumberOfGrabbedTasksExceededError':
        super.catch(
          new BadRequestException({
            statusCode: 400,
            message: exception.message,
            error: 'Bad request',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'JsonWebTokenError':
        super.catch(
          new BadRequestException({
            statusCode: 400,
            message: exception.message,
            error: 'Bad request',
            name: exception.constructor.name,
          }),
          host,
        )
        break
      case 'QueryFailedError':
        if (
          exception?.message.includes(
            'duplicate key value violates unique constraint',
          )
        )
          super.catch(
            new ConflictException({
              statusCode: 409,
              message: exception.message,
              error: 'Conflict',
              name: exception.constructor.name,
            }),
            host,
          )
        else
          super.catch(
            new InternalServerErrorException({
              statusCode: 500,
              message: exception.message,
              error: 'Internal Server Error',
              name: exception.constructor.name,
            }),
            host,
          )
        break
      default:
        if (exception.constructor.name.includes('Exception'))
          super.catch(exception, host)
        else
          super.catch(
            new InternalServerErrorException({
              statusCode: 500,
              message: exception.message,
              error: 'Internal Server Error',
              name: exception.constructor.name,
            }),
            host,
          )
    }
  }
}
