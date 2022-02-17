import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { EntityNotFoundError } from "typeorm";
import {FastifyReply} from 'fastify'

@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
  catch(error: EntityNotFoundError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<FastifyReply>()
    response.status(HttpStatus.NOT_FOUND).send({
      'status-code': HttpStatus.NOT_FOUND,
      message: 'Not found'
    })
  }
}