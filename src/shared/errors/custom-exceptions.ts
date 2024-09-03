import { HttpException, HttpStatus } from '@nestjs/common';

class BaseException extends HttpException {
  constructor(
    code: string,
    error: any,
    httpStatus: HttpStatus,
    remainingTime?: number,
    additionalValues?: Map<string, string>,
  ) {
    super({ code, error, remainingTime, additionalValues }, httpStatus);
  }
}

export class CustomException extends BaseException {}

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
