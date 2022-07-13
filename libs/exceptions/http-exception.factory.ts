import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

export class HttpExceptionFactory {
  static getException(code: HttpStatus, metadata: any): HttpException {
    switch (code) {
      case HttpStatus.BAD_REQUEST:
        return new BadRequestException(metadata);
      case HttpStatus.UNAUTHORIZED:
        return new UnauthorizedException(metadata);
      case HttpStatus.FORBIDDEN:
        return new ForbiddenException(metadata);
      default:
        return new InternalServerErrorException(metadata);
    }
  }
}
