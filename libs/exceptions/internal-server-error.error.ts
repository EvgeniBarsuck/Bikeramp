import { ExceptionBase } from './exception.base';

export class InternalServerError extends ExceptionBase {
  static message = 'Something went wrong with server';

  constructor(metadata?: unknown) {
    super(InternalServerError.message, metadata);
  }

  code: string;
}
