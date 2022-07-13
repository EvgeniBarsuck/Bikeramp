import { ExceptionBase } from './exception.base';
import { HttpStatus } from '@nestjs/common';

/**
 * Used to indicate that an incorrect argument was provided to a method/function/class constructor
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */
export class ArgumentInvalidException extends ExceptionBase {
  readonly code = HttpStatus.BAD_REQUEST;
}
