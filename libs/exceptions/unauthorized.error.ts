import { HttpStatus } from '@nestjs/common';

import { ExceptionBase } from './exception.base';

export class UnauthorizedError extends ExceptionBase {
  static message = 'You are not authorized';

  code = HttpStatus.UNAUTHORIZED;

  constructor(metadata?: unknown) {
    super(UnauthorizedError.message, metadata);
  }
}
