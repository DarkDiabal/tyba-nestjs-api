import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomBadRequestException extends HttpException {
  constructor(code: string, message: string) {
    super({ code, message }, HttpStatus.BAD_REQUEST);
  }
}

export class CustomInternalServerException extends HttpException {
  constructor(code: string, message: string) {
    super({ code, message }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
