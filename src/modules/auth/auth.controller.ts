import { Body, Controller, Post, Version } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { GeneralDataResponse, UserDto } from './dto/user.dto';
import {
  INTERNAL_SERVER_ERROR,
  INVALID_PAYLOAD_ERROR,
} from 'src/shared/errors/response-errors';
import { AuthService } from './auth.service';
import {
  CustomException,
  CustomInternalServerException,
} from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Version('1')
  @ApiOperation({
    summary: 'create user',
    description: 'method for create a new user',
  })
  @ApiBadRequestResponse({
    description: INVALID_PAYLOAD_ERROR,
  })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  @Post('sign-up')
  async signUp(@Body() user: UserDto): Promise<GeneralDataResponse> {
    try {
      return await this.authService.createUser(user);
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(ErrorCodesEnum.TBA005, error);
    }
  }

  @Version('1')
  @Post('sign-in')
  async signIp(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }

  @Version('1')
  @Post('sign-out')
  async signOut(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }
}
